import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--devcode-surface)]">
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Terminal Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-[var(--devcode-surface-container-low)] border-2 border-[var(--devcode-on-surface)] neo-shadow rounded-lg overflow-hidden">
              {/* Window Controls */}
              <div className="bg-[var(--devcode-on-surface)] p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--devcode-tertiary)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--devcode-secondary)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--devcode-primary-container)]" />
                </div>
                <span className="font-space-grotesk text-[var(--devcode-surface)] text-xs tracking-widest uppercase font-bold">
                  Terminal Access - v2.4.0
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-8 font-mono space-y-4 dark:[&_.text-on-surface]:text-[var(--devcode-on-surface)]">
                <div className="flex gap-2 text-[var(--devcode-primary)]">
                  <span>$</span>
                  <span className="text-[var(--devcode-on-surface)]">
                    fetch_route --target "/lost-page"
                  </span>
                </div>
                <div className="flex gap-2 text-[var(--devcode-tertiary)] font-bold">
                  <span className="material-symbols-outlined">error</span>
                  <span>CRITICAL_ERROR: ROUTE_NOT_FOUND</span>
                </div>
                <div className="text-[var(--devcode-on-surface-variant)] text-sm leading-relaxed border-l-2 border-[var(--devcode-outline)] pl-4">
                  <p> Exception: 404_NULL_POINTER_EXCEPTION</p>
                  <p>
                    {" "}
                    Status: Requested resource does not exist in our central
                    repository.
                  </p>
                  <p> Trace: [Library - Core - VirtualStack - LostInCode]</p>
                </div>
                <div className="flex gap-2 text-[var(--devcode-primary)] animate-pulse">
                  <span>$</span>
                  <span className="bg-[var(--devcode-primary)] h-5 w-2 inline-block" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[var(--devcode-secondary-container)] text-[var(--devcode-on-secondary-container)] border-2 border-[var(--devcode-on-surface)] font-space-grotesk text-xs font-bold uppercase tracking-widest rounded-lg">
                Status: 404
              </span>
              <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-[var(--devcode-on-surface)] leading-tight">
                Terminal Error
              </h1>
              <p className="font-space-grotesk text-lg text-[var(--devcode-on-surface-variant)] max-w-md">
                The route you are looking for has been deprecated or moved to an
                inaccessible directory. Your code is fine, but this page
                isn&apos;t.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/"
                className="bg-[var(--devcode-primary)] text-white border-2 border-[var(--devcode-on-surface)] px-8 py-4 font-space-grotesk font-bold text-lg neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 flex items-center justify-center gap-2 rounded-lg"
              >
                Go Home
              </Link>
              <Link
                href="#"
                className="bg-[var(--devcode-surface-container-highest)] text-[var(--devcode-on-surface)] border-2 border-[var(--devcode-on-surface)] px-8 py-4 font-space-grotesk font-bold text-lg hover:bg-[var(--devcode-surface-container-high)] transition-all duration-100 flex items-center justify-center gap-2 rounded-lg"
              >
                Search Library
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
