import { Footer } from "@/components/footer";

export default function Loading() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col overflow-hidden selection:bg-secondary-container">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
        {/* Bauhaus Loading Indicator */}
        <div className="relative w-48 h-48 mb-12">
          <div className="absolute inset-0 border-8 border-on-background rounded-full"></div>
          <div
            className="absolute inset-2 border-4 border-primary rounded-full border-t-transparent animate-spin"
            style={{ animationDuration: "2000ms" }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-on-background flex items-center justify-center">
              <span className="text-background text-3xl font-black terminal-cursor">
                _
              </span>
            </div>
          </div>
          {/* Decorative Squares */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary border-2 border-on-background"></div>
          <div className="absolute -bottom-2 -right-6 w-12 h-4 bg-tertiary border-2 border-on-background"></div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-headline-lg font-headline font-bold uppercase tracking-tighter mb-2">
            INITIALIZING SYSTEM
          </h1>
          <p className="font-label text-label-bold uppercase tracking-widest text-outline">
            v4.0.2 // STABLE_BUILD
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-2xl mb-12">
          <div className="flex justify-between mb-2 px-1">
            <span className="font-label text-label-bold uppercase tracking-widest text-primary">
              Boot Sequence
            </span>
            <span className="font-label text-label-bold text-on-background">
              100%
            </span>
          </div>
          <div className="h-8 w-full bg-surface-container-highest border-4 border-on-background p-1 neo-border-thick">
            <div className="h-full bg-primary-container border-r-2 border-on-background neo-shadow-sm animate-fill-progress"></div>
          </div>
        </div>

        {/* System Log & Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Log Panel */}
          <div className="md:col-span-2 bg-surface-container border-2 border-on-background p-6 neo-shadow flex flex-col gap-4">
            <div className="flex items-center justify-between border-b-2 border-on-background pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary border border-on-background rounded-full"></span>
                <span className="font-label text-label-bold uppercase tracking-widest">
                  System Log
                </span>
              </div>
              <span className="text-xs font-mono text-outline">
                0.0.0.0:8080
              </span>
            </div>
            <div className="font-mono text-sm space-y-2 system-log-scroll overflow-hidden h-40">
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[INFO]</span>{" "}
                Connecting to node_cluster_01...
              </p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[INFO]</span> Fetching
                problem_set_metadata...
              </p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[OK]</span>{" "}
                Authentication handshake successful.
              </p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[INFO]</span>{" "}
                Synchronizing user_profiles_cache...
              </p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[INFO]</span> Mapping
                submission_worker_threads...
              </p>
              <p className="text-tertiary">
                <span className="font-bold">[WARN]</span> Latency detected in
                Asia-East-1 node.
              </p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">[OK]</span> Compiling
                runtime environment.
              </p>
              <p className="text-on-surface-variant animate-pulse">
                <span className="text-primary font-bold">[INFO]</span>{" "}
                Finalizing UI rendering engine...
              </p>
            </div>
          </div>

          {/* Side Status Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-primary text-on-primary border-2 border-on-background p-4 neo-shadow">
              <div className="font-label text-label-bold uppercase tracking-widest mb-1">
                Status
              </div>
              <div className="text-2xl font-black italic">ACTIVE</div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container border-2 border-on-background p-4 neo-shadow flex-grow">
              <div className="font-label text-label-bold uppercase tracking-widest mb-1">
                Encrypted
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  data-icon="lock"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
                <span className="font-bold">AES-256</span>
              </div>
              <div className="mt-4 border-t border-on-secondary-container/20 pt-2">
                <div className="text-[10px] uppercase font-bold opacity-70">
                  Handshake ID
                </div>
                <div className="text-xs font-mono break-all">
                  8f2c-49aa-99b3-12cd83
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-5">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[80%] border-l-2 border-on-background"></div>
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[60%] border-r-2 border-on-background"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[80%] h-2 border-b-2 border-on-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-dashed border-on-background rounded-full"></div>
      </div>
    </div>
  );
}
