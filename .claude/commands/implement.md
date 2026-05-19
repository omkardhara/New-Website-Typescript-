# Implement GitHub Issue

Implement the GitHub issue number passed as the argument (e.g. `/implement 12`).

## Steps

1. **Read the issue** using `mcp__github__list_issues` or `mcp__github__issue_read` for repo `omkardhara/New-Website-Typescript-`, issue number `$ARGUMENTS`.

2. **Cross-reference CLAUDE.md** — do NOT read source files unless the issue references a specific line or unknown component. Use CLAUDE.md for file paths, type shapes, and patterns.

3. **Implement** — make all changes described in the issue. Follow the patterns in CLAUDE.md exactly:
   - New work card → `data/work.ts`, follow WorkItem type
   - New writing piece → `data/site.ts`, follow Note type  
   - New Red Bull article → `data/redbull-notes.ts`
   - New video → `data/videos.ts`
   - Content edit → edit the specific field in the specific file
   - Bug fix → read only the file(s) mentioned in the issue

4. **Type check** — run `npx tsc --noEmit 2>&1 | grep -v TS5101` to verify no errors.

5. **Commit** with a clear message summarising what was implemented, referencing the issue number.

6. **Push** — `git pull origin main --rebase && git push -u origin main`. Retry up to 4 times with exponential backoff if push fails due to network error.

7. **Close the issue** using `mcp__github__issue_write` or equivalent — mark as closed with a comment: "Implemented in commit [hash]."

## Rules
- Do not ask clarifying questions — implement exactly what the issue specifies.
- If the issue is missing required data (e.g. image path not provided), implement everything else and leave a comment on the issue listing what's still needed.
- Keep commits focused — one issue per commit.
