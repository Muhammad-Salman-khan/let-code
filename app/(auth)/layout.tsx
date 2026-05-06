import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "oklch(0.5 0 0)",
        }}
      />
      {/* Gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full opacity-8 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.488 0.243 264.376 / 0.12), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full opacity-8 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.865 0.127 207.078 / 0.1), transparent 70%)",
        }}
      />
      <div className="relative w-full max-w-md animate-fade-in">{children}</div>
    </div>
  );
};

export default AuthLayout;
