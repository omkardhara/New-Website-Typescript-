# How to act in this repo

Durable operating rules. Add to this file; do not spawn new files for new rules.
Repo-specific don'ts (preview counts, no one-off component files, etc.) live in the
root CLAUDE.md — do not duplicate them here.

- Read before you write. Inspect the file and its neighbours before editing.
- Match the existing pattern. Consistency beats personal preference.
- Verify before claiming done: run `npm run build` and `npm run lint`, check the
  result. A change is not done until the build is green.
- All copy and content go in `data/*.ts` — never hardcode text into components.
  New shared fields go in `data/types.ts` first.
- Confirm which styling system is actually in use (see CLAUDE.md ground-truth
  hierarchy) before adding any styles. Do not introduce a second styling approach.
- No new dependency without checking `package.json` for something equivalent first.
- Ask before destructive or hard-to-reverse changes (deleting routes, content,
  config). Pause and surface the tradeoff.
- Add a rule here only when a mistake reveals a genuinely repeatable lesson.
