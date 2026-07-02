# data/ — content schemas and how to add things

## WorkItem type
```ts
{ id, slug, cat, tag, title, desc, stat, glyph, gradient?, image?, images?, captions?, article?, yt?, url?, linkLabel? }
```
- `cat` values: `performance | brand | installation | activism | production | art | education`
- `url?` — if set, card links externally; no internal page is generated
- `yt?` — YouTube video ID; renders an embed at top of the project page
- `linkLabel?` — overrides the "View project" link text (e.g. "View on Red Bull")
- `hidden?: boolean` — hides card from Work tab and /work list, but still generates article page (used for Adventures cards)

## Card ordering rule
Cards with an `image` field automatically sort before cards without one. No manual reordering needed — adding a photo to a card moves it above all placeholders.
- `article` — plain text; supports `[link text](url)` markdown links, `**bold**`, `## Heading`

## Note type
```ts
{ id, slug, title, date, read, tag, excerpt, type, image?, imagePosition?, content?, aiAssisted?, url?, publication? }
```
- `type`: `article | poem | short-story`
- Writing sections: `essays` = articles + short-stories where publication ≠ Red Bull; `redbull` = publication === 'Red Bull'; `poems` = type === poem
- External notes (`url` set) don't get internal pages — excluded from generateStaticParams

## PressItem type
```ts
{ id, slug, publication, title, featured, year, type, src, thumb?, images?, thumbPosition?, category, url? }
```
- `featured: true` items appear on the About page
- `category`: `street-art | juggling | activism | installation`
- `src` doubles as page 1 of the article-scan gallery on `/press/[slug]` — keep it as the full original screenshot
- `thumb?` — optional card-thumbnail override (used by PressTab/PressListPage) when `src` is a full-page scan with chrome (headline, share buttons, etc.) unsuited for a cropped card view

## Adding a new work card
1. Add entry to `WORK` array in `data/work.ts` with next sequential id
2. First 3 entries (or first 3 matching the active filter) appear on the homepage tab; all appear on `/work`
3. If new category needed: add to `cat` union in `data/types.ts` AND add to `WORK_FILTERS` in `data/work.ts`
4. If external URL: add `url` field — no page.tsx needed
5. If video embed: add `yt: 'YOUTUBE_ID'`
6. To override link text: add `linkLabel: 'View on Platform'`

## Adding a new Red Bull article
1. Add to `data/redbull-notes.ts` with `publication: 'Red Bull'`, `url`, and `image: '/images/redbull/[slug].jpg'`
2. Drop image into `/public/images/redbull/[slug].jpg`

## Adding a writing piece (essay/poem/short-story)
1. Add to `NOTES` in `data/site.ts`
2. For internal pages: add content to `data/writing-content.ts`, reference via `content: WRITING_CONTENT['slug']`
3. For external: add `url` field — no internal page generated

## Adding a press item
1. Add to `PRESS` array in `data/site.ts`
2. Images go in `/public/images/press/`
3. Set `featured: true` to appear on the About page
