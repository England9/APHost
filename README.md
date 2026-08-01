# Vulcira

Corporate website for **Vulcira** — the central public-facing business platform connected to ventures associated with Apollo Twelve LLC and founder-led initiatives.

Built with Astro, TypeScript, and Tailwind CSS. Designed for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

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

## Deploy to Cloudflare Pages

### Git integration (recommended)

1. Push this repository to GitHub.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repository.
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 or later

### Direct deploy

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=vulcira
```

## Project structure

```
src/
  components/     UI, layout, and page sections
  data/           Site config and organization content
  layouts/        Base HTML layout
  pages/          Routes
  styles/         Global CSS and design tokens
public/           Static assets, robots.txt
```

## Content management

Organization details are defined in `src/data/organizations.ts`. Edit names, descriptions, URLs, images, and display order there without changing page layouts.

## Legal structure

- **Apollo Twelve LLC** is associated with Vulcira, Golden Days LLC, and Vulcira Fashion.
- **The Chain Reaction Project** is a separate nonprofit entity founded by the same founder and is not associated with Apollo Twelve LLC.
