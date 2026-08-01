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

Messages are sent via [Resend](https://resend.com) (free tier: 3,000 emails/month). Verify `apollotwelve.org` in Resend, then set Worker secrets:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

Update `CONTACT_TO` in `wrangler.jsonc` (or Cloudflare Dashboard variables) to your real email.

See `.env.example` for full setup instructions.

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
