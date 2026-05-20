# MEMORY_SETUP.md — One-Time Directive for Claude Code

**To Claude Code:** Read this file fully, then execute the steps in order. It sets up
a clean memory layer for this repository and fixes documentation drift found during
an audit. When finished, move this file to `docs/archive/` and report what changed.

This directive is adapted from a production memory-architecture audit. The principles
below are the fix for the failure mode where AI guidance drifts, bloats, and gets
ignored.

---

## Context — this repository

- **Project:** `omkardhareshwar.com` — personal website for Omkar Dhareshwar, a flow
  artist, performer, and storyteller.
- **Stack:** Next.js 14 (App Router), TypeScript (strict), npm, deployed on Vercel.
- **Branch:** `main` — pushed to directly; Vercel auto-deploys on push.
- **Content:** no database; all copy lives in `data/*.ts`.
- **Current state:** the root `CLAUDE.md` is already lean (~42 lines) — good. This
  directive AUGMENTS it; it does not gut it. The real problems are (a) two docs that
  contradict each other and (b) no structured memory layer.

---

## Core principles — apply these throughout

1. **Memory stores only what cannot live anywhere else.** If a fact has an
   authoritative source — the code, `package.json`, a config file, a README, the live
   Vercel site — it does NOT go in memory. A copy in memory just drifts.
2. **Only two memory types are durable.** Sort every candidate fact:
   - *Episodic* (what happened: build status, open issues, "currently building X")
     → NEVER store. Re-derive from the repo or GitHub Issues.
   - *Trivia* (minor preferences) → noise, don't store.
   - *Semantic* (stable domain facts) → store ONLY if genuinely non-obvious.
   - *Procedural* (how to act) → store. The primary durable type.
   - *Reasoning priors* (how to think before concluding) → store.
3. **Identity comes first.** `CLAUDE.md` opens with what the project IS and who it
   serves — not with the current task.
4. **Always-loaded context stays small.** Buried rules get skipped under pressure.
5. **A ground-truth hierarchy decides conflicts.** When two sources disagree, the
   higher-ranked one is reality; the other is wrong and gets corrected.
6. **Consolidate, never proliferate.** One file per memory type, not one per lesson.
7. **Honor-system rules decay; mechanical checks hold.** A rule that matters belongs
   in code, lint, or a hook — not only in prose.
8. **No duplicate rules.** A rule in code + config + memory = three copies that
   drift. One authoritative home per fact.

---

## Step 1 — Reconcile documentation drift (do this FIRST)

Two conflicts were found. Resolve each by checking the authoritative source (the
actual code/config), then correcting whichever document is wrong.

### Conflict A — Tailwind: is it used or not?

- `README.md` says the stack is "Tailwind CSS 3 + bespoke CSS in globals.css".
- `CLAUDE.md` says "plain globals.css with CSS variables (no Tailwind)" and lists
  "Don't add Tailwind" under things-not-to-do.
- The repo contains `tailwind.config.ts` and `postcss.config.mjs`.

**Resolve it:** Check `package.json` dependencies for `tailwindcss`, check
`postcss.config.mjs` for the tailwind plugin, and check `app/globals.css` for
`@tailwind` directives or Tailwind utility usage in components.
- If Tailwind IS actually in use → fix `CLAUDE.md` to say so and remove the
  "Don't add Tailwind" rule.
- If Tailwind is NOT in use → fix `README.md`, and delete the unused
  `tailwind.config.ts` / `postcss.config.mjs` (or note why they remain).
Do not leave both documents in place contradicting each other.

### Conflict B — config filename

`CLAUDE.md` says "Don't modify `next.config.ts`" but the actual file is
`next.config.mjs`. Correct the filename in `CLAUDE.md`.

After both fixes, `README.md` and `CLAUDE.md` must agree on the stack.

---

## Step 2 — Light edits to the root `CLAUDE.md`

Do NOT rewrite it wholesale — it is already lean and mostly good. Make only these
targeted edits:

1. **Add an identity line at the very top**, before the `## Stack` section:
   > `omkardhareshwar.com is the personal website of Omkar Dhareshwar — flow artist,`
   > `performer, and storyteller. A Next.js 14 site whose job is to present his work`
   > `beautifully, load fast, and stay easy to update.`
2. **Add a `## Ground-truth hierarchy` section** (place it right after identity):
   > Higher sources win. When they disagree, the higher source is reality; the lower
   > one is wrong and should be corrected.
   > 1. The live Vercel deployment — what visitors actually see.
   > 2. `main` branch code — source of truth for behavior.
   > 3. `package.json` + lockfile + config files — declared stack and scripts.
   > 4. `README.md` and `docs/` — design intent.
   > 5. `memory/` files — reasoning priors and how-to-act rules only. Never fact.
3. **Add a one-line pointer to memory** near the end:
   > Reasoning priors and operating rules live in `memory/` — see `memory/MEMORY.md`.
   > Project state, build status, and open work are NEVER stored there.
4. **Keep everything else** — the data-files table, the "homepage tab preview counts"
   rule, the git workflow, and the "Things NOT to do" list are all correct procedural
   content with a proper home. Do not move them into `memory/`.

---

## Step 3 — Create the `memory/` directory

Create exactly these four files at the repo root in `memory/`. Nothing else. The
directory must stay under ~10 files permanently.

### `memory/MEMORY.md` (index — keep under 15 lines)

```markdown
# Memory index

Memory holds ONLY durable reasoning priors and how-to-act rules. It is not a log,
not a status board, not a place for build results, open issues, or "what we did."

- `how_to_act.md` — how to operate in this repo (procedural).
- `domain_facts.md` — stable, non-obvious facts with no better home.
- `reasoning.md` — how to think before drawing a conclusion.

## Rules for editing this directory
- Before adding a fact, ask: does it have an authoritative source (code, config,
  README, the live site)? If yes, it does NOT go here.
- Update an existing file before creating a new one. New files are the exception.
- Episodic content (build status, open issues, current task) is forbidden here.
```

### `memory/how_to_act.md` (procedural — the primary file)

```markdown
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
```

### `memory/domain_facts.md` (semantic — start nearly empty)

```markdown
# Domain facts

Stable, non-obvious facts about this project with NO better home in code, config,
README, or docs. If a fact belongs in a README, put it there instead.

Start empty. Add a line only when a fact is both durable and genuinely non-obvious.
```

### `memory/reasoning.md` (reasoning priors)

```markdown
# Reasoning priors

How to think before concluding — these shape judgment, not just actions.

- Distinguish what you observed from what you inferred. State which is which.
- One data point is not a trend. Do not redesign on a single failure.
- If a claim is checkable against the code or the live site, check it — do not
  rely on memory of how things used to work.
- Stale belief is worse than no belief: an outdated assumption misleads silently.
- When two sources disagree, do not pick the convenient one — apply the
  ground-truth hierarchy and correct the wrong source.
```

---

## Step 4 — Add a documentation rule to prevent re-bloat

Append a short `## Documentation rules` section to `CLAUDE.md`:

```markdown
## Documentation rules

1. `README.md` and `CLAUDE.md` must always agree on the stack. If they drift,
   the code wins — fix the docs.
2. Architecture or convention changes update the relevant doc, not a new file.
3. Do not add page-specific detail into `CLAUDE.md`; it belongs in `docs/` or the
   nested `data/CLAUDE.md`.
4. Do not add a memory file without checking whether `memory/how_to_act.md` or
   `memory/domain_facts.md` should be updated instead. Memory stays small on purpose.
```

---

## What NOT to do

- Do NOT store build status, deploy status, open GitHub issues, or "current task"
  in `memory/`. Re-derive those every time.
- Do NOT create one memory file per bug or lesson. Consolidate into the four files.
- Do NOT copy a rule into memory if it already lives in `CLAUDE.md`, code, or config.
- Do NOT let `CLAUDE.md` grow into a monolith. If it passes ~150 lines, move detail
  into `docs/`.
- Do NOT leave `README.md` and `CLAUDE.md` contradicting each other on any fact.

---

## Done criteria

- [ ] Tailwind conflict resolved; `README.md` and `CLAUDE.md` agree on the stack.
- [ ] `next.config` filename corrected in `CLAUDE.md`.
- [ ] `CLAUDE.md` has an identity line, a ground-truth hierarchy, and a memory pointer;
      all existing correct content preserved.
- [ ] `memory/` contains exactly: `MEMORY.md`, `how_to_act.md`, `domain_facts.md`,
      `reasoning.md` — no episodic content anywhere in them.
- [ ] Documentation rules section added to `CLAUDE.md`.
- [ ] `npm run build` and `npm run lint` still pass.
- [ ] This file moved to `docs/archive/MEMORY_SETUP.md`.
- [ ] A short summary of every change reported back to the maintainer.
