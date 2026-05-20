# CLAUDE.md — omkardhareshwar.com

`omkardhareshwar.com` is the personal website of Omkar Dhareshwar — flow artist, performer, and storyteller. A Next.js 14 site whose job is to present his work beautifully, load fast, and stay easy to update.

## Ground-truth hierarchy
Higher sources win. When two sources disagree, the higher one is reality; the lower one is wrong and should be corrected.
1. The live Vercel deployment — what visitors actually see.
2. `main` branch code — source of truth for behaviour.
3. `package.json` + lockfile + config files — declared stack and scripts.
4. `README.md` and `docs/` — design intent.
5. `memory/` files — reasoning priors and how-to-act rules only. Never fact.

## Stack
- Next.js 14 App Router (static export), TypeScript, deployed on Vercel
- No database — all data in `/data/*.ts` files
- CSS: plain globals.css with CSS variables (no Tailwind)
- Images: `/public/images/` (static), `/public/images/redbull/` (Red Bull article covers)
- Note: `tailwind.config.ts` and `postcss.config.mjs` exist but Tailwind is not used — they are vestigial from a prior scaffold. Do not add Tailwind utility classes.

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
- Don't modify `next.config.mjs` or `tsconfig.json` without good reason
- Don't add Tailwind — all styling via globals.css and inline styles
- Don't create new component files for one-off page sections — inline in page.tsx
- Don't fetch external APIs at build time — all data is static in /data/
- Don't add `priority` to more than the first 1-2 images per page
- Don't increase homepage tab preview counts (see rule above)

## Documentation rules
1. `README.md` and `CLAUDE.md` must always agree on the stack. If they drift, the code wins — fix the docs.
2. Architecture or convention changes update the relevant doc, not a new file.
3. Do not add page-specific detail into `CLAUDE.md`; it belongs in `docs/` or the nested `data/CLAUDE.md`.
4. Do not add a memory file without checking whether `memory/how_to_act.md` or `memory/domain_facts.md` should be updated instead. Memory stays small on purpose.

Reasoning priors and operating rules live in `memory/` — see `memory/MEMORY.md`. Project state, build status, and open work are NEVER stored there.
