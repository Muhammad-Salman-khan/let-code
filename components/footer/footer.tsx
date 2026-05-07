import Link from "next/link";

const footerLinks = [
  { label: "Help Center", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Bug Bounty", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Feedback", href: "#" },
];

const navigationLinks = [
  { label: "Documentation", href: "#" },
  { label: "Changelog", href: "#" },
];

const systemLinks = [
  { label: "API Status", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--devcode-surface-container-highest)] border-t-2 border-[var(--devcode-on-surface)]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-space-grotesk font-bold text-[var(--devcode-on-surface)] text-2xl">
            DevCode
          </span>
          <p className="font-space-grotesk text-[var(--devcode-on-surface-variant)] max-w-xs">
            Building the future of developer tools with mathematical precision
            and Neo-Bauhaus aesthetics.
          </p>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-[var(--devcode-on-surface)]">
              Navigation
            </span>
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--devcode-on-surface-variant)] hover:text-[var(--devcode-on-surface)] transition-all font-space-grotesk"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-[var(--devcode-on-surface)]">
              System
            </span>
            {systemLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--devcode-on-surface-variant)] hover:text-[var(--devcode-on-surface)] transition-all font-space-grotesk"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="text-[var(--devcode-on-surface-variant)] font-space-grotesk text-sm flex flex-col items-end gap-2">
          <span>© 2026 DevCode. Form Follows Function.</span>
        </div>
      </div>
    </footer>
  );
}
