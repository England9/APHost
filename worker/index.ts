/// <reference types="@cloudflare/workers-types" />

export interface Env {
  ASSETS: Fetcher;
  TURNSTILE_SITE_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
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

const PLACEHOLDER_CONTACT_TO = 'your-inbox@yourdomain.com';

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

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Apollo Contact Form <${env.CONTACT_FROM}>`,
      to: [env.CONTACT_TO],
      reply_to: payload.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Resend delivery failed:', response.status, detail);
    throw new Error(`Email delivery failed with status ${response.status}`);
  }
}

function isContactConfigured(env: Env): boolean {
  return Boolean(
    env.RESEND_API_KEY &&
      env.CONTACT_TO &&
      env.CONTACT_FROM &&
      env.CONTACT_TO !== PLACEHOLDER_CONTACT_TO &&
      !env.CONTACT_TO.includes('your-inbox'),
  );
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!env.TURNSTILE_SECRET_KEY) {
    return Response.json(
      { error: 'Contact form is not fully configured. Set TURNSTILE_SECRET_KEY on the Worker.' },
      { status: 503 },
    );
  }

  if (!isContactConfigured(env)) {
    return Response.json(
      {
        error:
          'Email delivery is not configured. Set RESEND_API_KEY and CONTACT_TO on the Worker, then verify your domain in Resend.',
      },
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
    return Response.json(
      {
        error:
          'Unable to send your message right now. Confirm RESEND_API_KEY is set, apollotwelve.org is verified in Resend, and CONTACT_TO is your real email.',
      },
      { status: 502 },
    );
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
