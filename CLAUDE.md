# CLAUDE.md — omkardhareshwar.com

## Stack
- Next.js 14 App Router (static export), TypeScript, deployed on Vercel
- No database — all data in `/data/*.ts` files
- CSS: plain globals.css with CSS variables (no Tailwind)
- Images: `/public/images/` (static), `/public/images/redbull/` (Red Bull article covers)

## Key data files — edit these for content changes

| File | What it controls |
|---|---|
| `data/work.ts` | Work project cards + articles. `WORK_FILTERS` array controls filter chips. `WorkItem.cat` must match a filter id. |
| `data/redbull-notes.ts` | 78 Red Bull article cards (external links). All have `publication: 'Red Bull'` and `url`. |
| `data/site.ts` | Notes (essays/poems), Press items, Offerings, Socials. `NOTES` array is the source of truth for writing. |
| `data/videos.ts` | Media tab video cards. Each needs `title`, `sub`, `yt` (YouTube ID), `thumb`. |
| `data/timeline.ts` | Story page timeline events. Each has `year`, `title`, `desc`, `tag`, `image?`. |
| `data/types.ts` | All TypeScript types. Edit here when adding new fields. |

## WorkItem type
```ts
{ id, slug, cat, tag, title, desc, stat, glyph, gradient?, image?, images?, captions?, article?, yt?, url? }
```
- `cat` values: `performance | brand | installation | activism | production | art | education`
- `url?` — if set, card links externally (no internal page generated, excluded from static params)
- `yt?` — YouTube video ID; renders an embed at top of project page
- `article` — plain text with `[link text](url)` markdown links supported

## Note type
```ts
{ id, slug, title, date, read, tag, excerpt, type, image?, imagePosition?, content?, aiAssisted?, url?, publication? }
```
- `type`: `article | poem | short-story`
- Writing sections: `essays` = articles+short-stories where publication ≠ Red Bull; `redbull` = publication === 'Red Bull'; `poems` = type === poem
- External notes (`url` set) don't get internal pages — excluded from generateStaticParams

## Adding a new work card
1. Add entry to `WORK` array in `data/work.ts` with next sequential id
2. If new category needed: add to `cat` union in `data/types.ts` AND add to `WORK_FILTERS` in `data/work.ts`
3. If external URL: add `url` field — no page.tsx needed
4. If video: add `yt: 'YOUTUBE_ID'` — embed appears automatically on project page

## Adding a new Red Bull article
1. Add to `data/redbull-notes.ts` with `publication: 'Red Bull'`, `url`, and `image: '/images/redbull/[slug].jpg'`
2. Drop image into `/public/images/redbull/[slug].jpg`

## Adding a writing piece (essay/poem)
1. Add to `NOTES` in `data/site.ts`
2. For internal pages: add content to `data/writing-content.ts`, reference via `content: WRITING_CONTENT['slug']`
3. For external: add `url` field

## Press items
- Stored in `PRESS` array in `data/site.ts`
- Images go in `/public/images/press/`
- `featured: true` items appear on the About page

## CSS variables (globals.css)
```
--bg-cream, --bg-dark, --text-dark, --text-dark-2, --text-dark-3, --text-dark-4
--text-light, --text-light-2, --text-light-3
--gold, --gold-light, --ember, --ember-light
--line-dark, --line-faint, --line-light
--font-serif, --font-mono, --font-sans
--surface, --surface-3
```

## Component map
- `components/TabShell.tsx` — the sticky Work/Media/Press tab bar on homepage
- `components/tabs/WorkTab.tsx` — work grid + filter chips
- `components/tabs/NotesTab.tsx` — writing preview (3 cards per section)
- `components/tabs/MediaTab.tsx` — video grid
- `components/tabs/PressTab.tsx` — press grid + lightbox
- `components/WritingListPage.tsx` — full writing list pages (/writing/essays etc.)
- `components/AboutPage.tsx` — /about page
- `components/StoryMap.tsx` — /story page timeline
- `components/Hero.tsx` — homepage hero

## Routing
- `/` — homepage (TabShell with Work/Media/Press + Notes preview above)
- `/work/[slug]` — project detail (static, skips items with `url` set)
- `/writing/essays` `/writing/redbull` `/writing/poems` — full writing lists
- `/writing/[slug]` — individual writing page (skips items with `url` set)
- `/about` `/story` `/press` `/contact` — static pages

## Git workflow
- Branch: `main` — push directly
- Always `git pull origin main --rebase` before pushing if push fails
- Commit format: short imperative summary + blank line + detail if needed

## Things NOT to do
- Don't modify `next.config.ts` or `tsconfig.json` without good reason
- Don't add Tailwind — all styling via globals.css and inline styles
- Don't create new component files for one-off page sections — inline in page.tsx
- Don't fetch external APIs at build time — all data is static in /data/
