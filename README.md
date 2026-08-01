# Apollo

Corporate website for **Apollo** — the public-facing platform for ventures associated with Apollo Twelve LLC and founder-led initiatives.

Built with Astro, TypeScript, and Tailwind CSS. Deployed on Cloudflare Workers with static assets.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy

```bash
npm run build
npm run deploy
```

## Contact form (Cloudflare)

The contact form posts to `/api/contact` and is handled by the Cloudflare Worker in `worker/index.ts`.

Messages are delivered **for free** via Mailchannels — no paid Cloudflare Email plan. Submissions are sent to whatever address you set in `CONTACT_TO` (Gmail, Outlook, etc.).

1. Create a [Turnstile](https://developers.cloudflare.com/turnstile/) widget for your domain.
2. Set Worker secrets:

```bash
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put CONTACT_TO
```

3. Update `CONTACT_FROM` and `TURNSTILE_SITE_KEY` in `wrangler.jsonc`.
4. Add the `_mailchannels` DNS TXT record (see `.env.example`).

See `.env.example` for full setup instructions including DNS records.

## Project structure

```
src/
  components/     UI, layout, and page sections
  data/           Site config, ventures, and legal content
  layouts/        Base HTML layout
  pages/          Routes
  styles/         Global CSS and design tokens
public/           Static assets, logo, robots.txt
worker/           Cloudflare Worker for contact form API
```

## Organizational structure

- **Apollo** is the central public-facing website and brand platform.
- **Apollo Twelve LLC** is the parent company associated with Vulcira and Golden Days.
- **The Chain Reaction Project** is a separate nonprofit entity founded by the same founder.
