# omkardhareshwar.com — Next.js 14

Personal website for Omkar Dhareshwar — flow artist, performer, storyteller. Built on Next.js 14 (App Router), TypeScript, and plain CSS (no Tailwind — all styles in `globals.css`).

## Quick start

```bash
cd omkar-site
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## File structure

```
omkar-site/
├── app/
│   ├── layout.tsx          ← root layout, fonts, nav, footer, JSON-LD
│   ├── page.tsx            ← homepage (hero + tabs + contact band)
│   ├── globals.css         ← design tokens + all bespoke CSS
│   ├── not-found.tsx       ← 404
│   ├── work/[slug]/page.tsx← per-project pages (replaces modals)
│   ├── story/page.tsx      ← Story page (videogame map placeholder)
│   └── contact/page.tsx    ← contact page
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx            ← portrait + headline + stat counters
│   ├── TabShell.tsx        ← tab state + bar + panel switching
│   ├── ContactBand.tsx
│   └── tabs/
│       ├── WorkTab.tsx
│       ├── MediaTab.tsx
│       ├── PressTab.tsx
│       ├── NotesTab.tsx
│       ├── StoryTab.tsx
│       └── DispatchesTab.tsx
├── data/
│   ├── types.ts            ← shared TypeScript types
│   ├── work.ts             ← case studies (typed, with slugs for routing)
│   ├── videos.ts           ← YouTube videos
│   └── site.ts             ← press, notes, chapters, offerings, socials, nav
├── lib/
│   └── fonts.ts            ← next/font setup (Cormorant Garamond, DM Sans, DM Mono)
├── public/images/          ← your portrait + project images
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## What's wired

- ✅ Hero with portrait, animated stat counters, mobile-first responsive
- ✅ Six tab system (Work / Media / Press / Field Notes / Story / Dispatches)
- ✅ Work filter chips functional — filters by category
- ✅ Click any work card → routes to `/work/[slug]` with full article + image gallery
- ✅ Click any video → YouTube modal opens
- ✅ Click "Read the piece" on a field note → routes to `/writing/[slug]` (page itself is not built yet)
- ✅ Story tab → `/story` page (chapter list placeholder; videogame map coming next session)
- ✅ Per-page SEO via Next's native `generateMetadata`
- ✅ JSON-LD Person schema in root layout
- ✅ OG tags, Twitter cards, canonical, robots
- ✅ Nav color flip when scrolling past hero
- ✅ Sticky tab bar
- ✅ Mobile breakpoints — portrait lifts up after headline

## What's stubbed (intentional, easy to wire later)

- [ ] Press images — replace gradient placeholders with real article scans
- [ ] Press card click → lightbox/PDF modal
- [ ] `/writing/[slug]` pages (Field Notes click-through routes to nothing yet)
- [ ] WhatsApp number in `app/contact/page.tsx` (currently a placeholder)
- [ ] OG image at `/public/og-image.jpg`
- [ ] Real videogame-map Story (next session — this is its own dedicated build)
- [ ] Sizzle reel button on hero (currently no play button — kept simpler per your call)

## Migrate your existing images

Copy everything from your current repo's `public/images/` directory into `omkar-site/public/images/`. The file paths in `data/work.ts` and `data/site.ts` match your current naming, so it should just work.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (or new branch on the existing one).
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Next.js and deploys with zero config.
4. Add your custom domain `omkardhareshwar.com` in Vercel → Project → Settings → Domains.
5. Update your DNS at the registrar: change the CNAME from `omkardhara.github.io` to `cname.vercel-dns.com` (Vercel will show the exact value).
6. Wait ~5 min for DNS to propagate. Site is live, no downtime if you keep the GitHub Pages deployment up until cutover.

## DNS cutover plan (zero downtime)

1. Deploy to Vercel under a preview URL like `omkar-site.vercel.app` first.
2. Test everything there.
3. When ready, add `omkardhareshwar.com` to Vercel and update DNS.
4. The old GitHub Pages site will go dark only once DNS propagates — by which point Vercel is already live.

## Where things live

- **Design tokens** (colors, fonts) → `app/globals.css` `:root` block + `tailwind.config.ts`
- **All copy** → `data/*.ts` files (one source of truth)
- **All page content** → `components/tabs/*.tsx`
- **Images** → `public/images/`

## Commands

```bash
npm run dev      # local dev at :3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

## Tech stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | Next.js 14 (App Router)               |
| Language    | TypeScript (strict)                   |
| Styling     | Plain CSS in `globals.css` — CSS custom properties, no Tailwind |
| Fonts       | Cormorant Garamond, DM Sans, DM Mono via next/font |
| Animation   | CSS keyframes (Framer Motion installed for Story map) |
| Hosting     | Vercel (recommended)                  |
| SEO         | Native Next metadata + JSON-LD schema |

## Next sessions

1. **Build the videogame-map Story page** — Framer Motion + SVG path, interactive chapter nodes, stat overlays. This is the flagship visual moment.
2. **Wire `/writing/[slug]` pages** — MDX or simple .md per essay.
3. **Polish press tab** — real images + PDF lightbox + filter by year.
4. **Add a contact form** (Vercel Forms / Resend / Formspree).
5. **Analytics** — Plausible or Vercel Analytics.
