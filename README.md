# Let Code

A professional, modern web application built with Next.js, TypeScript, and PostgreSQL. This project features a robust authentication system, an interactive dashboard, and a comprehensive UI component library.

## 🚀 Tech Stack

**Core Framework & Language**

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Bun](https://bun.sh/)

**Backend & Database**

- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Better Auth](https://better-auth.com/) (integrated with Google OAuth and Polar)

**Frontend & Styling**

- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Visualization:** [Recharts](https://recharts.org/) & [TanStack Table](https://tanstack.com/table/latest)
- **State Management & Validation:** [Zod](https://zod.dev/)

## ✨ Key Features

- **Advanced Authentication**: Secure user onboarding and session management using Better Auth.
- **Interactive Dashboard**: A comprehensive admin and user dashboard featuring:
  - Data-rich tables for resource management.
  - Interactive analytics area charts.
  - Responsive sidebar navigation.
- **Role-Based Access Control (RBAC)**: Built-in support for `ADMIN` and `USER` roles.
- **Modern UI/UX**: Fully responsive design with dark mode support, powered by Tailwind CSS 4 and a wide array of accessible components.
- **Type-Safe Database**: End-to-end type safety from the database schema to the frontend using Prisma.

## 📂 Project Structure

```text
├── app/                    # Next.js App Router
│   ├── api/                # Backend API endpoints (Auth, etc.)
│   ├── dashboard/          # Dashboard routes (Admin & User views)
│   └── layout.tsx          # Root layout and global providers
├── components/             # React Components
│   ├── ui/                 # Base shadcn/ui components
│   ├── providers/          # Context providers (Theme, Auth, etc.)
│   └── [feature].tsx       # Feature-specific components (Sidebar, Charts)
├── hooks/                  # Custom React hooks (e.g., use-mobile.ts)
├── lib/                    # Core logic and utilities
│   ├── action/             # Server actions for data mutations
│   ├── auth/               # Better Auth configuration and client
│   ├── db/                 # Database query helpers
│   ├── prisma/             # Prisma client singleton
│   └── services/           # Business logic layer
├── prisma/                 # Database schema and migrations
│   └── schema.prisma       # Database model definitions
├── public/                 # Static assets
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A PostgreSQL database instance.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Muhammad-Salman-khan/let-code.git
   cd letcode-ref
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your database and auth credentials:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/letcode-ref"
   BETTER_AUTH_SECRET="your-secret-here"
   # Add other required environment variables for OAuth/Polar
   ```

4. **Database Migration:**

   ```bash
   bunx prisma generate
   bunx prisma migrate dev
   ```

5. **Run the development server:**
   ```bash
   bun dev
   ```

## 📜 Available Scripts

- `bun dev`: Starts the Next.js development server.
- `bun build`: Generates Prisma client and builds the Next.js application for production.
- `bun start`: Starts the production server.
- `bun lint`: Runs ESLint to check for code quality issues.

---

Developed with ❤️ using Next.js and Bun.
