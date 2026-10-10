# maxshapira.dev

Personal portfolio — Next.js 16 (App Router, static export), TypeScript, plain CSS. No UI framework, no runtime dependencies beyond React.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Editing content

All copy lives in **`src/data/content.ts`** — experience, case studies, projects, writing, skills, links. Components only render that data, so updating the site never means touching JSX.

### Adding the CV

1. Put the PDF at `public/Max-Shapira-CV.pdf`.
2. In `src/data/content.ts`, set `cvAvailable: true`.

The "Download CV" buttons in the hero and contact sections appear automatically.

### Adding project screenshots

Drop images in `public/projects/` and add an `image` field to the project in `content.ts` (the card component needs a small `<img>` addition when you're ready).

## Structure

```
src/
  app/
    layout.tsx     metadata, Open Graph, JSON-LD Person schema, fonts
    page.tsx       the single page
    globals.css    design tokens (light + dark) and all styles
    sitemap.ts     /sitemap.xml
    robots.ts      /robots.txt
    icon.svg       favicon (hanko seal)
  components/
    Section.tsx    section shell, tag list, ensō SVG
    Reveal.tsx     IntersectionObserver scroll-reveal (no-op without JS)
  data/
    content.ts     ← edit this
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo. Framework preset is detected as Next.js; no settings to change.
3. Every push to `main` deploys to production; PRs get preview URLs.

## Custom domain (maxshapira.dev)

1. Buy `maxshapira.dev` (Vercel Domains, Cloudflare, Namecheap, Porkbun…). `.dev` is HSTS-preloaded, so it is HTTPS-only — Vercel issues the certificate automatically.
2. Vercel → Project → **Settings → Domains** → add `maxshapira.dev` and `www.maxshapira.dev`; set `www` to redirect to the apex.
3. If the domain is registered elsewhere, add the DNS records Vercel shows (an `A` record for the apex, a `CNAME` for `www`), or switch nameservers to Vercel.

If you end up on a different domain, change `site.url` in `content.ts` so canonical URLs, the sitemap and Open Graph tags match.

## Design notes

- Dark by default (sumi ink `#161512`) with a light washi-paper theme behind the header toggle; the choice is saved per visitor. One vermilion accent (shu-iro).
- Tech belt: logos from Simple Icons (CC0), configured in `src/data/tech.ts`. Brands Simple Icons does not carry (Microsoft products, Typesense, Branch.io) use neutral line glyphs. On hover a logo scales up, takes its brand colour and shows its name; touch screens show names always.
- Type: Shippori Mincho (headings), Zen Kaku Gothic New (body), JetBrains Mono (labels).
- Sections are numbered with kanji numerals 一 to 七; the hero ensō is drawn once with a stroke animation.
- Respects `prefers-reduced-motion` (the belt becomes a static list); content is never hidden when JavaScript is off.
