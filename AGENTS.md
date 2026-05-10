<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Rules

These are non-negotiable. Every deviation is a mistake. No exceptions.

**Command execution**
- All scripts use **Bun**, not npm/yarn/pnpm. Never use `npx` or `npm exec` — use `bunx`.

**Component architecture**
- `page.tsx` MUST be a Server Component. No `"use client"` directive at the top of any `page.tsx`. Ever.
- Pages only fetch data, compose layouts, and pass props down.
- If a page needs state, an event handler, or a browser API — that logic does NOT belong in the page. Extract it into a Client Component.
- Any component that needs interactivity (useState, useEffect, useRef, event handlers, window, localStorage, etc.) MUST be a Client Component.
- Add `"use client"` at the very top of the file — before any imports.
- Keep Client Components as small and leaf-level as possible. Push them down the tree.

**UI construction**
- Every UI element MUST come from shadcn/ui first. Check before writing custom `<div>`: Button, Input, Card, Dialog, Sheet, Table, Form, Select, Tabs, Badge, Avatar, Skeleton — use them all.
- Do NOT install or use Radix UI primitives directly. shadcn wraps them. Use shadcn.
- Do NOT use MUI, Chakra, Mantine, Headless UI, or any other component library alongside shadcn.
- Custom components only permitted when shadcn has nothing that fits. Document why when that happens.
- Always import from `@/components/ui/...`. Style is `radix-nova`. Custom theme lives in `app/globals.css` (DevCode neo-brutalist design system).

**Separation of concerns**
- Components are responsible for **one thing**: turning data into markup.
- No business logic inside components (no transformation, validation, decision-making).
- No direct database calls inside components. Data arrives via props, Server Actions, or query hooks.
- No API route logic inside UI files.
- If you find yourself writing conditionals that belong in a service or utility — extract and import.

**File structure**
- Every shared component MUST live in its own named folder.
- Structure: `components/ComponentName/ComponentName.tsx`
- Folder name is PascalCase and matches the component name exactly.
- File inside is also PascalCase and matches the folder name exactly.
- One component per folder. No barrel `index.ts` files unless explicitly needed for re-exports across multiple sub-components of the same feature.
- Default export name must match the file and folder name.

## Commands (Bun)

- `bun install` — install dependencies
- `bun dev` — start development server (requires `.env`)
- `bun build` — runs `bunx prisma generate && next build`
- `bun start` — start production server (after build)
- `bun lint` — run ESLint (Next.js core-web-vitals + typescript). Run before every commit.
- Prisma: `bunx prisma <command>` (e.g., `bunx prisma migrate dev`)

## Database & Prisma

- Requires PostgreSQL. `DATABASE_URL` must be set in `.env` before running anything.
- Prisma client is generated to `./prisma/lib/generated/prisma`. Import path: `@/prisma/lib/generated/prisma/client`.
- `lib/prisma/index.ts` exports a singleton with global cache and `PrismaPg` adapter.
- Run `bunx prisma migrate dev` after any schema change.
- **Never edit files under `prisma/lib/generated/prisma`** — they are auto-generated and will be overwritten.

## Environment Variables

Define all of these in `.env` before running `bun dev`. Missing vars cause crashes at startup.

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Session encryption key |
| `BETTER_AUTH_URL` | Site URL for auth callbacks |
| `GOOGLE_CLIENT_ID` | Google OAuth |
| `GOOGLE_CLIENT_SECRET` | Google OAuth |
| `POLAR_ACCESS_TOKEN` | Optional — only if Polar integration is enabled |

`.env` is gitignored. Never commit secrets.

## Framework Notes

- Next.js 16 + React 19. APIs and conventions differ from older versions — do not assume.
- `next.config.ts`: React Compiler is enabled (`reactCompiler: true`).
- TypeScript path alias: `@/*` maps to the project root.
- App Router only. Pages are Server Components by default.

## Testing & CI

- No test suite configured. Do not guess or invent test commands.
- No CI configuration present.
- `bun lint` is the only quality gate.

## Gotchas

- `bun build` already runs `prisma generate`. Only run it separately if the schema changed and you need the client rebuilt without a full build.
- Missing `.env` will crash `bun dev` immediately — verify it exists first.
- Never use `npx` or `pnpm` — this project uses Bun exclusively.

## Summary

| Rule | Requirement |
|------|-------------|
| `page.tsx` | MUST be a Server Component — no exceptions |
| Interactive components | MUST use `"use client"` and be extracted out of pages |
| UI library | MUST use shadcn/ui — no other component libraries |
| Component scope | UI only — no business logic, no DB calls, no API logic |
| File structure | `components/ComponentName/ComponentName.tsx` — always |
| Package manager | Bun only — never npm, yarn, pnpm, or npx |
