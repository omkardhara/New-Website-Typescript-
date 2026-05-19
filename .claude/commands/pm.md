# Project Manager Review

You are acting as project manager for omkardhareshwar.com. Run a structured review across four areas and produce a prioritised action list. Do NOT read source files unless a specific issue requires diagnosis — use CLAUDE.md as your primary reference.

## Step 1 — Open GitHub issues
Use `mcp__github__list_issues` for repo `omkardhara/New-Website-Typescript-` (state: open).
List each issue with: number, title, label, and a one-line status (not started / in progress / blocked).

## Step 2 — Recent commits (last 7)
Run `git log --oneline -7`. Note what shipped recently so we don't duplicate work.

## Step 3 — Content completeness audit
Check the following known placeholders and report status (done / pending / blocked on user):
- Work cards with `article: 'Details and images coming soon.'` — list which ones
- Work cards with no `image` field set — list slugs
- Red Bull articles with image path set but no file in /public/images/redbull/ (run a quick diff)
- Videos with `maxresdefault` thumbnails that might 404

## Step 4 — SEO & UX quick-checks (no code reading needed — reason from CLAUDE.md)
Flag any known gaps:
- Pages missing OG images
- Internal cross-links added vs still needed
- Mobile UX issues noted but not yet fixed
- Performance: large images, missing `priority` flags on above-fold images

## Step 5 — Prioritised next steps
Output a numbered list, ordered by impact × effort:
1. [P0] Blockers — things broken right now
2. [P1] High impact, low effort — quick wins
3. [P2] High impact, higher effort — planned work
4. [P3] Nice to have

Keep the whole output under 400 words. No filler. Every line should be actionable.
