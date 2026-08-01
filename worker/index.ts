/// <reference types="@cloudflare/workers-types" />

export interface Env {
  ASSETS: Fetcher;
  TURNSTILE_SITE_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  interest: string;
  message: string;
  turnstileToken: string;
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

async function sendContactEmail(payload: ContactPayload, env: Env): Promise<void> {
  const subject = `Apollo inquiry: ${payload.interest}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || '—'}`,
    `Area of interest: ${payload.interest}`,
    '',
    payload.message,
  ].join('\n');

  const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: env.CONTACT_TO }] }],
      from: { email: env.CONTACT_FROM, name: 'Apollo Contact Form' },
      reply_to: { email: payload.email, name: payload.name },
      subject,
      content: [{ type: 'text/plain', value: text }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Mail delivery failed with status ${response.status}`);
  }
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!env.TURNSTILE_SECRET_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return Response.json(
      { error: 'Contact form is not fully configured. Please set Cloudflare Worker secrets.' },
      { status: 503 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, interest, message, turnstileToken, company } = payload;

  if (!name?.trim() || !email?.trim() || !interest?.trim() || !message?.trim() || !turnstileToken) {
    return Response.json({ error: 'All required fields must be completed.' }, { status: 400 });
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? '';
  const verified = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY, ip);

  if (!verified) {
    return Response.json({ error: 'Security verification failed. Please try again.' }, { status: 403 });
  }

  try {
    await sendContactEmail({ name, email, company, interest, message, turnstileToken }, env);
  } catch {
    return Response.json({ error: 'Unable to send your message right now. Please try again later.' }, { status: 502 });
  }

  return Response.json({ success: true });
}

async function handleConfig(env: Env): Promise<Response> {
  const siteKey = env.TURNSTILE_SITE_KEY;
  const isTestKey = siteKey === '1x00000000000000000000AA' || siteKey === '2x00000000000000000000AB';

  if (!siteKey || isTestKey) {
    return Response.json(
      {
        turnstileSiteKey: null,
        error: 'Turnstile is not configured with a production site key.',
      },
      { status: 503 },
    );
  }

  return Response.json({ turnstileSiteKey: siteKey });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/config' && request.method === 'GET') {
      return handleConfig(env);
    }

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') {
        return handleContact(request, env);
      }

      return new Response('Method Not Allowed', { status: 405 });
    }

    return env.ASSETS.fetch(request);
  },
};
