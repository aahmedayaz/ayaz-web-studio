# Ayaz Web Studio

Ultra-fast marketing site for **Ayaz Web Studio** — built with Next.js App Router, Tailwind CSS, and Core Web Vitals–first patterns. Ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no env vars required for the marketing site

## Where to put assets

Place brand files under `public/brand/` with these exact names:

| File | Path | Used for |
|------|------|----------|
| Full logo (3D lockup) | `public/brand/logo-full.png` | Hero brand mark, Open Graph |
| Logo mark (icon only) | `public/brand/logo-mark.svg` | Nav, favicon |
| Founder portrait | `public/brand/founder.png` | Hero background + About section |

### Optional upgrades (same paths)

For even better LCP, replace the PNGs with optimized versions **keeping the same filenames**:

- `public/brand/logo-full.webp` — then update imports in `Hero` / metadata if you switch format
- Prefer **WebP/AVIF** under ~80KB for the founder photo when possible
- Recommended founder crop: portrait, subject left-of-center or right-facing so text can sit cleanly on the dark side

### Favicon

`public/brand/logo-mark.svg` is wired as the site icon in `src/app/layout.tsx`.  
To use a classic favicon instead, add `public/favicon.ico` and update the `icons` field in metadata.

## Performance choices

- Self-hosted fonts via `next/font` (Sora / Inter / IBM Plex Mono) — no Google Fonts CSS waterfall
- `next/image` with AVIF/WebP, priority LCP images, long cache headers
- Client JS only where needed (nav, rotate word, tabs, FAQ, reveal)
- `lucide-react` tree-shaken via `optimizePackageImports`
- Map iframe is `loading="lazy"` (below the fold)
- `prefers-reduced-motion` respected for animations

## Edit content

All copy, contact info, and lists live in `src/lib/site.ts`.
