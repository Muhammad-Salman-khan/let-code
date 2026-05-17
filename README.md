# Let Code

Let Code is a full-stack web application built with Next.js 16, React 19, TypeScript, and PostgreSQL. It ships with Better Auth authentication, role-based dashboards, and a neo‑brutalist UI powered by shadcn/ui and Tailwind CSS 4.

## ✨ Highlights

- **App Router** with Server Components by default
- **Better Auth** with Google OAuth support
- **PostgreSQL + Prisma** for type-safe data access
- **Neo‑brutalist design system** (`radix-nova`) with shadcn/ui
- **Bun-first workflow** for scripts and tooling

## 🧰 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Runtime & tooling:** Bun
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** Better Auth (+ Google OAuth, optional Polar)
- **UI:** shadcn/ui (Radix-based) + Tailwind CSS 4
- **Charts/Tables:** Recharts, TanStack Table

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A running PostgreSQL instance

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Muhammad-Salman-khan/let-code.git
   cd letcode-ref
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Create `.env`** (required)

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/letcode_ref"
   BETTER_AUTH_SECRET="your-secret-here"
   BETTER_AUTH_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   # Optional
   POLAR_ACCESS_TOKEN="your-polar-token"
   ```

4. **Generate Prisma client and run migrations**

   ```bash
   bunx prisma generate
   bunx prisma migrate dev
   ```

5. **Start the dev server**

   ```bash
   bun dev
   ```

> `bun build` already runs `bunx prisma generate`.

## 📜 Scripts

- `bun dev` — start development server
- `bun build` — generate Prisma client and build for production
- `bun start` — start production server
- `bun lint` — run ESLint

## 📂 Project Structure

```text
app/                # App Router routes (Server Components by default)
components/         # UI and feature components
  ui/               # shadcn/ui components
lib/                # Utilities, hooks, auth, prisma singleton
modules/            # Server actions and feature modules
prisma/             # Prisma schema + migrations
public/             # Static assets
designs/            # Design references and mockups
```

## 🎨 Design System

The UI follows a neo‑brutalist style (“radix‑nova”) defined in `app/globals.css` and documented in `designs/bauhaus_neo_brutalist/DESIGN.md`.

## ✅ Development Notes

- Pages are **Server Components** by default; move interactive logic into Client Components.
- Use **shadcn/ui** components first for all UI elements.
- Run `bun lint` before committing changes.

---

Built with ❤️ using Next.js and Bun.
