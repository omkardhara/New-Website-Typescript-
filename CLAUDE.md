# CLAUDE.md — omkardhareshwar.com

## Stack
- Next.js 14 App Router (static export), TypeScript, deployed on Vercel
- No database — all data in `/data/*.ts` files
- CSS: plain globals.css with CSS variables (no Tailwind)
- Images: `/public/images/` (static), `/public/images/redbull/` (Red Bull article covers)

## Data files — where content lives
| File | What it controls |
|---|---|
| `data/work.ts` | Work project cards. `WORK_FILTERS` controls filter chips. |
| `data/redbull-notes.ts` | Red Bull article cards (external links). |
| `data/site.ts` | Notes (essays/poems), Press items, Offerings, Socials. |
| `data/videos.ts` | Media tab video cards. |
| `data/timeline.ts` | Story page timeline events. |
| `data/types.ts` | All TypeScript types — edit here when adding new fields. |

See `data/CLAUDE.md` for type schemas and step-by-step content instructions.

## Homepage tab preview counts — DO NOT change these
Each tab shows exactly 3 items and links to a full list page. These limits are intentional and must not be increased, even when new cards are added.
| Tab | Preview count | Full list page | Constant |
|---|---|---|---|
| Work | 3 | `/work` | `PREVIEW_COUNT` in `components/tabs/WorkTab.tsx` |
| Media | 3 | `/media` | `PREVIEW_COUNT` in `components/tabs/MediaTab.tsx` |
| Notes | 3 per section | `/writing/essays` etc. | `PREVIEW_COUNT` in `components/tabs/NotesTab.tsx` |

Adding new cards updates the "See all N →" count automatically but never adds more to the homepage tab.

## Git workflow
- Branch: `main` — push directly
- Always `git pull origin main --rebase` before pushing if push fails
- Commit format: short imperative summary + blank line + detail if needed

## Things NOT to do
- Don't modify `next.config.ts` or `tsconfig.json` without good reason
- Don't add Tailwind — all styling via globals.css and inline styles
- Don't create new component files for one-off page sections — inline in page.tsx
- Don't fetch external APIs at build time — all data is static in /data/
- Don't add `priority` to more than the first 1-2 images per page
- Don't increase homepage tab preview counts (see rule above)
