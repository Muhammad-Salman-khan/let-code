# CLAUDE.md - Project Documentation for AI Agents

**Project**: Let Code
**Version**: 0.1.0
**Last updated**: 2025-12-19 (by Hermes Agent)
**Purpose**: Comprehensive reference for AI agents working on the Letcode-ref Next.js project. Includes setup, architecture, conventions, design system, and current state.

---

## 1. PROJECT OVERVIEW

Let Code is a full-stack web application built with Next.js 16 (App Router), React 19, TypeScript, and PostgreSQL. It features user authentication (Better Auth), role-based dashboards (admin/user), and a neo-brutalist UI design. The project follows strict architectural rules:
- Server Components by default
- shadcn/ui for all UI elements
- Bun as the package manager
- Prisma for database ORM
- Tailwind CSS 4 with a custom `radix-nova` theme

---

## 2. TECH STACK

- **Framework**: Next.js 16.2.4 (App Router)
- **Runtime**: Bun 1.x
- **Language**: TypeScript 5.x
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS 4 + PostCSS
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Data Viz**: Recharts, TanStack Table
- **Forms**: @tanstack/react-form-nextjs, Zod
- **Drag & Drop**: @dnd-kit
- **Carousel**: embla-carousel-react
- **Auth**: Better Auth (@polar-sh/better-auth, better-auth)
- **Database**: PostgreSQL (Neon/Serverless compatible via PrismaPg)
- **ORM**: Prisma 7.8.0
- **OAuth**: Google
- **Payments** (optional): Polar (@polar-sh/sdk)
- **Analytics**: @vercel/analytics
- **Theme**: next-themes
- **Toasts**: sonner

---

## 3. SETUP & INSTALLATION

1. Clone repository:
   ```bash
   git clone https://github.com/Muhammad-Salman-khan/let-code.git
   cd letcode-ref
   ```

2. Install dependencies (Bun):
   ```bash
   bun install
   ```

3. Create `.env` file in project root with required variables (see section 4).

4. Generate Prisma client and run migrations:
   ```bash
   bunx prisma generate
   bunx prisma migrate dev
   ```

5. Start development server:
   ```bash
   bun dev
   ```

**Note**: `bun build` automatically runs `bunx prisma generate` before Next.js build.

---

## 4. ENVIRONMENT VARIABLES

### Required
- `DATABASE_URL` – PostgreSQL connection string (e.g., `postgresql://user:pass@localhost:5432/letcode_ref`)
- `BETTER_AUTH_SECRET` – Session encryption secret (minimum 32 random characters)
- `BETTER_AUTH_URL` – Site URL for auth callbacks (e.g., `http://localhost:3000`)
- `GOOGLE_CLIENT_ID` – Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` – Google OAuth client secret

### Optional
- `POLAR_ACCESS_TOKEN` – For Polar integration (if used)

All variables must be present; missing ones cause `bun dev` to crash on startup.

---

## 5. DATABASE SCHEMA

### Models (Prisma)

```prisma
generator client {
  provider = "prisma-client"
  output   = "./lib/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

enum Role {
  ADMIN
  USER
}

model User {
  id            String    @id
  name          String
  email         String    @unique
  emailVerified Boolean   @default(true)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  sessions      Session[]
  accounts      Account[]
  role          Role      @default(USER)
  isBlocked     Boolean   @default(false)
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@index([userId])
  @@map("session")
}

model Account {
  id                    String   @id
  accountId             String
  providerId            String
  userId                String
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
  @@index([userId])
  @@map("account")
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  @@index([identifier])
  @@map("verification")
}
```

**Important notes**:
- All tables map to lowercase names (`@@map`).
- Prisma client generation output is configured to `./lib/generated/prisma`.
- Import path: `@/prisma/lib/generated/prisma/client`.
- `lib/prisma/index.ts` exports a singleton `prisma` instance using `PrismaPg` adapter for serverless Postgres compatibility.
- After any schema change: `bunx prisma generate && bunx prisma migrate dev`.

---

## 6. DIRECTORY STRUCTURE

```
letcode-ref/
├── app/                          # Next.js App Router (Server Components by default)
│   ├── (auth)/                   # Route group (no shared layout)
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   │   └── _LoginForm/Login-form.tsx
│   │   └── signup/
│   │       ├── page.tsx
│   │       └── _SignUpForm/SignUpForm.tsx
│   ├── api/
│   │   └── auth/[...all]/route.ts   # Better Auth endpoints
│   ├── dashboard/
│   │   ├── [user]/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── profile/
│   │   │       ├── page.tsx
│   │   │       └── settings/page.tsx
│   │   └── admin/page.tsx
│   ├── layout.tsx               # Root layout + global providers
│   ├── page.tsx                 # Public home page
│   ├── globals.css              # Tailwind + neo-brutalist theme
│   ├── not-found.tsx
│   └── favicon.ico
├── components/
│   ├── ui/                      # All shadcn/ui components (see section 9)
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── Navigation/
│   │   ├── Navigation.tsx
│   │   └── index.ts
│   ├── StatsGrid.tsx
│   ├── RecentSubmissions.tsx
│   ├── Proficiency.tsx
│   ├── ActivityHeatmap.tsx
│   ├── Achievements.tsx
│   ├── ProfileHeader.tsx
│   ├── SettingsClient.tsx (Client Component)
│   ├── app-sidebar.tsx
│   ├── data-table.tsx
│   ├── chart-area-interactive.tsx
│   ├── section-cards.tsx
│   ├── site-header.tsx
│   ├── nav-documents.tsx
│   ├── nav-main.tsx
│   ├── nav-secondary.tsx
│   ├── nav-user.tsx
│   ├── footer/
│   │   ├── footer.tsx
│   │   └── index.ts
├── lib/
│   ├── prisma/
│   │   └── index.ts             # Prisma singleton export
│   ├── auth/
│   │   ├── index.ts
│   │   └── auth-client.ts
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── utils.ts                 # Utilities (cn, etc.)
│   ├── Validator/
│   │   ├── Form-validators/index.ts
│   │   └── helperFunctionTypes/index.ts
│   └── polar/
│       └── index.ts
├── modules/
│   └── auth/
│       └── action/
│           └── index.ts         # Server Actions
├── prisma/
│   ├── schema.prisma
│   ├── lib/generated/prisma/    # Auto-generated (do not edit)
│   └── migrations/
├── public/                      # Static assets
├── designs/                     # Design specs & mockups
│   ├── bauhaus_neo_brutalist/DESIGN.md
│   ├── developer_console/DESIGN.md
│   ├── neo_bauhaus_light/DESIGN.md
│   ├── vivid_terminal/DESIGN.md
│   └── stitch_leetcode_landing_page/...
├── package.json
├── tsconfig.json
├── next.config.ts
├── components.json
├── postcss.config.mjs
├── .env (gitignored)
├── bun.lock
├── eslint.config.mjs
└── README.md
```

---

## 7. CONFIG FILES

### `next.config.ts`
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
```
Enables React Compiler (automatic memoization) for React 19.

### `tsconfig.json`
Standard Next.js TypeScript configuration with `@/*` path alias mapping to project root.

### `components.json`
shadcn/ui component registry. Lists installed components and their file locations. Used by `shadcn@latest` CLI.

### `postcss.config.mjs`
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
Tailwind CSS 4 integration via PostCSS.

### `app/globals.css`
Root stylesheet:
- Imports Tailwind CSS (`@import "tailwindcss"`).
- Defines CSS variables for the `radix-nova` theme.
- Implements the neo-brutalist design system (thick borders, hard shadows, Space Grotesk/Inter fonts).
- Contains base resets and component overrides.
- Must be imported in `app/layout.tsx`.

---

## 8. ROUTES & PAGES

| Route | File | Type | Notes |
|-------|------|------|-------|
| `/` | `app/page.tsx` | Server | Public home |
| `/login` | `app/(auth)/login/page.tsx` | Server | Uses `_LoginForm/Login-form.tsx` (Client Component) |
| `/signup` | `app/(auth)/signup/page.tsx` | Server | Uses `_SignUpForm/SignUpForm.tsx` |
| `/dashboard/[user]` | `app/dashboard/[user]/page.tsx` | Server | User dashboard |
| `/dashboard/[user]/profile` | `app/dashboard/[user]/profile/page.tsx` | Server | Profile view |
| `/dashboard/[user]/profile/settings` | `app/dashboard/[user]/profile/settings/page.tsx` | Likely Client | Settings page |
| `/dashboard/admin` | `app/dashboard/admin/page.tsx` | Admin Dashboard |
| `/problems` | `app/problems/page.tsx` | Problems library page (grid + filters + sidebar). Based on devcode_problems_library design. |
| `/api/auth/[...all]` | `app/api/auth/[...all]/route.ts` | Server | Better Auth catch-all |

All pages under `app/` are Server Components by default unless they contain `"use client"` directive. Interactive logic must be extracted to Client Components.

---

## 9. SHADCN/UI COMPONENTS INSTALLED

Base components in `components/ui/`:

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, ContextMenu, Dialog, Direction, Drawer, DropdownMenu, Empty, Field, HoverCard, InputGroup, InputOtp, Input, Item, Kbd, Label, MaterialSymbol, Menubar, NativeSelect, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (toast), Spinner, Switch, Table, Tabs, Textarea, ToggleGroup, Toggle, Tooltip.

Custom UI components (also in `components/`):
- `app-sidebar.tsx`
- `data-table.tsx`
- `chart-area-interactive.tsx`
- `nav-documents.tsx`, `nav-main.tsx`, `nav-secondary.tsx`, `nav-user.tsx`
- `site-header.tsx`, `section-cards.tsx`
- And feature-specific components like `StatsGrid.tsx`, `RecentSubmissions.tsx`, etc.

Always import base components from `@/components/ui/<component-name>`.

---

## 10. DESIGN SYSTEM: BAUHAUS NEO-BRUTALIST

The project uses the **ÉclairCode neo-brutalist** aesthetic. Reference: `designs/bauhaus_neo_brutalist/DESIGN.md`.

### Core Principles
- **Form follows function**: bold, raw, high contrast, strong geometry.
- No soft shadows. Use **thick solid borders** (2-3px) in black or high-contrast neutrals.
- Depth via **offset shadows**: solid-color block offsets (4-6px down-right) using darker neutral or accent.
- **Color palette** (light mode default):
  - Background: `#fcf8f8`
  - Primary (text, borders): `#1a1a1a` (charcoal)
  - Accent Yellow: `#ffcc00` (CTAs, highlights)
  - Accent Red: `#e63b2e` (destructive, emphasis)
  - Accent Blue: `#0055ff` (links, interactive)
- **Typography**:
  - Headlines: **Space Grotesk** – geometric, bold, aggressive oversizing (3x+ body).
  - Body: **Inter** – functional, readable.
- **Buttons**: Solid fill, thick border, uppercase text. Hover inverts colors (bg/text swap).
- **Cards**: Thick borders, minimal border-radius, content-dense, solid background offsets.
- **Inputs**: Thick bottom border only, minimal rounded corners.
- **Layouts**: Asymmetric compositions, oversized type.
- **Never** use soft shadows, glassmorphism, or subtle gradients.

**Implementation**: Tailwind utilities + custom CSS variables in `app/globals.css`. The theme identifier is `radix-nova`.

---

## 11. ARCHITECTURAL RULES (from AGENTS.md)

### Command Execution
- Use **Bun** exclusively. Never `npx`, `npm`, `yarn`, `pnpm`. Use `bunx` for CLIs (e.g., `bunx prisma migrate`, `bunx shadcn@latest add`).

### Component Architecture
- `page.tsx` **MUST** be a Server Component. No `"use client"` at the top of any `page.tsx`. Ever.
- Pages only fetch data, compose layouts, and pass props down.
- If a page needs state, event handlers, or browser APIs → extract into a separate Client Component with `"use client"` at the very top (before any imports).
- Keep Client Components as small and leaf-level as possible. Push them down the tree.

### UI Construction
- Every UI element MUST come from `shadcn/ui` first. Check before writing custom `<div>`: Button, Input, Card, Dialog, Sheet, Table, Form, Select, Tabs, Badge, Avatar, Skeleton, etc.
- Do NOT use Radix UI primitives directly; always use shadcn wrappers.
- Do NOT use other component libraries (MUI, Chakra, Mantine, Headless UI, etc.).
- Custom components permitted only when shadcn has nothing that fits; document why.
- Always import from `@/components/ui/...`.
- Style is `radix-nova`. Custom theme lives in `app/globals.css`.

### Separation of Concerns
- Components are responsible for **one thing**: turning data into markup.
- No business logic inside components (no transformation, validation, decision-making).
- No direct database calls inside components. Data arrives via props, Server Actions, or query hooks.
- No API route logic inside UI files.
- If you find yourself writing conditionals that belong in a service or utility — extract and import.

### File Structure
- Every shared component MUST live in its own named folder.
- Structure: `components/ComponentName/ComponentName.tsx`
- Folder name is PascalCase and matches the component name exactly.
- File inside is also PascalCase and matches the folder name exactly.
- One component per folder. No barrel `index.ts` files unless explicitly needed for re-exports across multiple sub-components of the same feature.
- Default export name must match the file and folder name.

### Commands (Bun)
- `bun install` — install dependencies
- `bun dev` — start development server (requires `.env`)
- `bun build` — runs `bunx prisma generate && next build`
- `bun start` — start production server
- `bun lint` — run ESLint (Next.js core-web-vitals + typescript). Run before every commit.
- Prisma: `bunx prisma <command>` (e.g., `bunx prisma migrate dev`)

### Database & Prisma
- Requires PostgreSQL. `DATABASE_URL` must be set in `.env` before running anything.
- Prisma client generated to `./prisma/lib/generated/prisma`. Import path: `@/prisma/lib/generated/prisma/client`.
- `lib/prisma/index.ts` exports a singleton with global cache and `PrismaPg` adapter.
- Run `bunx prisma migrate dev` after any schema change.
- **Never edit files under `prisma/lib/generated/prisma`** — they are auto-generated and will be overwritten.

### Environment Variables
See section 4. `.env` is gitignored. Never commit secrets.

### Framework Notes
- Next.js 16 + React 19. APIs and conventions differ from older versions — do not assume.
- `next.config.ts`: React Compiler is enabled (`reactCompiler: true`).
- TypeScript path alias: `@/*` maps to the project root.
- App Router only. Pages are Server Components by default.

### Testing & CI
- No test suite configured. Do not guess or invent test commands.
- No CI configuration present.
- `bun lint` is the only quality gate.

### Gotchas
- `bun build` already runs `prisma generate`. Only run it separately if the schema changed and you need the client rebuilt without a full build.
- Missing `.env` will crash `bun dev` immediately — verify it exists first.
- Never use `npx` or `pnpm` — this project uses Bun exclusively.

---

## 12. IMPORTANT LIBRARIES & UTILITIES

- `@/lib/prisma/index.ts` – exports default `prisma` singleton (PrismaClient with PrismaPg adapter). Use in Server Components, API routes, Server Actions.
- `@/lib/auth/index.ts` – Better Auth configuration and helper functions.
- `@/lib/auth/auth-client.ts` – Better Auth client for Client Components.
- `@/lib/utils.ts` – utility functions (likely `cn` for classnames merging).
- `@/lib/hooks/use-mobile.ts` – hook for viewport width detection.
- `@/lib/Validator/Form-validators/index.ts` – Zod validation schemas for forms.
- `@/modules/auth/action/index.ts` – Server Actions for authentication (likely).

---

## 13. SHADCN/USAGE & THEME

All base shadcn components are already installed in `components/ui/`. Import with absolute alias:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
```

Global providers set in `app/layout.tsx`:
- `ThemeProvider` (next-themes) – `attribute="class"`, `defaultTheme="light"`, `enableSystem={false}`.
- `TooltipProvider` – for tooltip context.
- `Toaster` (sonner) – toast notifications, positioned `top-center`, theme `light`.

The `radix-nova` theme is defined in `app/globals.css` using CSS variables. Shadcn components consume these variables for colors, borders, radii, etc. The neo-brutalist modifications (thick borders, hard offsets) are applied globally.

---

## 14. SERVER ACTIONS & API

- Better Auth routes: `app/api/auth/[...all]/route.ts` (catch-all).
- Server Actions likely located in `modules/auth/action/` or feature-specific directories.
- Use Server Actions for all data mutations to keep Client Components thin and avoid client-side API calls.

---

## 15. DEVELOPMENT WORKFLOW

1. Always run `bun lint` before committing.
2. For database schema changes:
   - Edit `prisma/schema.prisma`.
   - Run `bunx prisma generate && bunx prisma migrate dev`.
3. To add new shadcn components: `bunx shadcn@latest add <component-name>` (do not use `npx`).
4. Keep components pure. Extract any business logic, validation, or API calls to utilities or Server Actions.
5. New pages must be Server Components unless they require browser APIs; then create a separate Client Component with `"use client"` at the top.
6. Uphold neo-brutalist design in all UI work.

---

## 16. DESIGN SYSTEM REFERENCE (BAUHAUS NEO-BRUTALIST)

Source: `designs/bauhaus_neo_brutalist/DESIGN.md`

### Colors (exact hex)
- Background: `#fcf8f8` (light)
- Primary (text, heavy borders): `#1a1a1a`
- Accent Yellow: `#ffcc00`
- Accent Red: `#e63b2e`
- Accent Blue: `#0055ff`

### Typography
- Headlines: **Space Grotesk**, weight 700, display sizes (e.g., 64px for headline-display, 32px for headline-lg). Line height ~1.1-1.2.
- Body: **Inter**, weight 400, size 16px, line height 1.5.
- Labels: **Space Grotesk**, weight 500, size 14px.

### Borders & Elevation
- Border widths: `0.125rem` (2px) to `0.5rem` (8px) depending on element.
- No `box-shadow`. Depth simulated with solid offset blocks: `box-shadow: 4px 4px 0 0 #0055ff` (example).

### Component Guidelines
- Buttons: uppercase, bold, thick borders, solid fill, hover inverts colors.
- Cards: thick border, minimal radius (`0.25rem`), dense padding, may have offset background.
- Inputs: border only bottom, minimal radius; focus state uses primary color.
- Use asymmetric layouts and oversized headlines sparingly but intentionally.

**Use these tokens as Tailwind classes or in custom CSS.**

---

## 17. CURRENT PROJECT STATE (2025-12-19)

- Authentication scaffolding: login/signup pages with Better Auth integration.
- Two dashboard layouts: user and admin (role-based).
- Navigation and layout components exist.
- Comprehensive shadcn/ui component library already installed.
- Neo-brutalist theme applied globally (`app/globals.css`).
- Prisma schema set with User, Session, Account, Verification models.
- No test suite; only ESLint quality checks.
- Implemented Problems Library page (`/problems`) with full neo-brutalist styling and mock data.
- Design mockups available in `designs/` (including Bauhaus, Developer Console, Vivid Terminal styles).

---

## 18. AI AGENT GUIDELINES

When you (or any AI agent) start working on this project:
1. **Read this file first**.
2. **Follow AGENTS.md rules** without exception.
3. **Update this file** after any significant change (new component/page, config change, schema migration, dependency update). This is the "obsessive documentation" requirement.
4. **Use Bun** for all command-line operations. Never `npx`.
5. **Check existing components** before building new ones; reuse and adapt.
6. **Keep UI components pure** – move logic to Server Actions or utilities.
7. **Respect file structure**: `components/ComponentName/ComponentName.tsx` for reusable components.
8. **Adhere to neo-brutalist design** – thick borders, high contrast, Space Grotesk/Inter fonts, no soft shadows.
9. **Prefer Server Components**; only use Client Components when necessary and keep them minimal.
10. **Do not introduce other UI libraries**; shadcn/ui is the only source.
11. **Run `bun lint`** before completing any task.
12. **Never edit generated Prisma files**; modify schema and regenerate.

---

End of CLAUDE.md
