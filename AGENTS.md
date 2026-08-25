# Codex development guide

## Project

- Next.js App Router application written in TypeScript.
- Use Node.js 20 or newer and pnpm.
- Keep the existing Japanese copy and visual direction unless the task asks for changes.

## Workflow

1. Run `pnpm install --frozen-lockfile` when dependencies are missing.
2. Use `pnpm dev` for local development at `http://localhost:3000`.
3. Before handing off changes, run `pnpm check`.
4. For UI changes, verify the affected desktop and mobile layouts in a browser.

## Editing rules

- Prefer Server Components; add `"use client"` only when browser APIs, state, or event handlers require it.
- Reuse components and utilities already in `components/` and `lib/`.
- Keep images and videos in `public/`; use `next/image` for static images when practical.
- Never commit secrets. Add new public configuration keys to `.env.example` with placeholder values.
- Do not submit test contact forms to Salesforce during routine verification.
- Preserve unrelated user changes in the worktree.

## Validation

- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript
- `pnpm build` — production build
- `pnpm check` — all checks above

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
