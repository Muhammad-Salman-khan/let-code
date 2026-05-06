import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          color: "oklch(0.5 0 0)",
        }}
      />
      {/* Gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 size-[40rem] rounded-full opacity-8 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.488 0.243 264.376 / 0.1), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 size-[40rem] rounded-full opacity-8 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.865 0.127 207.078 / 0.08), transparent 70%)",
        }}
      />
      <main className="relative flex flex-col items-center text-center px-6 max-w-2xl">
        <div className="animate-fade-in-up delay-1 mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          Built with Next.js 16
        </div>
        <h1 className="animate-fade-in-up delay-2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          Let Code
        </h1>
        <p className="animate-fade-in-up delay-3 mt-4 text-lg text-muted-foreground max-w-md leading-relaxed">
          A professional, modern web application with authentication,
          interactive dashboards, and real-time analytics.
        </p>
        <div className="animate-fade-in-up delay-4 mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-11 w-48 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98]"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 w-48 items-center justify-center rounded-lg border bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:bg-muted hover:shadow-md active:scale-[0.98]"
          >
            Sign in
          </Link>
        </div>
      </main>
    </div>
  );
}