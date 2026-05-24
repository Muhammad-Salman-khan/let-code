import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const learningPaths = [
  {
    icon: "terminal",
    problemCount: "45 Problems",
    title: "Interview Prep",
    description: "The 75 essential problems for top tech companies.",
    progress: 66,
    color: "var(--devcode-tertiary)",
  },
  {
    icon: "account_tree",
    problemCount: "120 Problems",
    title: "Data Structures",
    description: "Master Trees, Graphs, and Hash Maps.",
    progress: 33,
    color: "var(--devcode-secondary)",
  },
  {
    icon: "speed",
    problemCount: "80 Problems",
    title: "Algorithms",
    description: "From Sorting to Dynamic Programming optimization.",
    progress: 0,
    color: "var(--devcode-primary-container)",
  },
  {
    icon: "dns",
    problemCount: "15 Courses",
    title: "System Design",
    description: "Scale systems and architect large-scale apps.",
    progress: 20,
    color: "var(--devcode-tertiary)",
  },
];

const leaderboardUsers = [
  {
    rank: 1,
    name: "dev_ninja",
    points: 2450,
    color: "var(--devcode-tertiary)",
    avatar: "/brandlogo.svg",
  },
  {
    rank: 2,
    name: "algo_queen",
    points: 2120,
    color: "var(--devcode-secondary)",
    avatar: "/brandlogo.svg",
  },
  {
    rank: 3,
    name: "stack_overflow",
    points: 1980,
    color: "var(--devcode-on-surface)",
    avatar: "/brandlogo.svg",
  },
];

export default async function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--devcode-surface)] text-[var(--devcode-on-surface)]">
        {/* Hero Section */}
        <section className="animate-slide-up relative overflow-hidden border-2 border-[var(--devcode-on-surface)] border-t-0 border-x-0 bg-[var(--devcode-surface-container-low)] p-12 md:p-24">
          {/* Decorative Code Icon */}
          <div
            className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined text-[300px] leading-none">
              code
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold leading-[0.9] max-w-4xl tracking-tighter">
              Level Up Your{" "}
              <span className="bg-[var(--devcode-primary-container)] px-2">
                Coding
              </span>{" "}
              Skills
            </h1>

            <p className="font-space-grotesk text-xl max-w-2xl font-medium leading-relaxed text-[var(--devcode-on-surface-variant)]">
              Master technical interviews with over 3000+ curated algorithmic
              challenges, real-time code execution, and expert learning paths.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl relative">
              <Input
                type="text"
                placeholder="Search problems, topics, or companies..."
                className="w-full bg-[var(--devcode-surface)] border-2 border-[var(--devcode-on-surface)] p-5 pl-4  text-lg focus:ring-0 focus:outline-none focus:bg-[var(--devcode-surface)] transition-colors font-space-grotesk placeholder:text-[var(--devcode-on-surface-variant)]"
              />
            </div>

            {/* CTA Button */}
            <Button className="font-space-grotesk font-bold text-2xl px-12 py-5 bg-[var(--devcode-tertiary)] text-white border-2 border-[var(--devcode-on-surface)] neo-shadow animate-pulse-shadow hover:opacity-90 cursor-pointer">
              START SOLVING
            </Button>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-6 py-16 space-y-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Problem of the Day */}
              <div
                className="animate-slide-up bg-[var(--devcode-surface)] border-2 border-[var(--devcode-on-surface)] p-8 hover:bg-[var(--devcode-surface-container)] transition-colors group"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-[var(--devcode-secondary)] text-white px-3 py-1 font-space-grotesk text-xs font-bold uppercase border-2 border-[var(--devcode-on-surface)] rounded-none border-none">
                        Medium
                      </Badge>
                      <span className="font-space-grotesk text-xs font-bold uppercase tracking-widest text-[var(--devcode-on-surface-variant)]">
                        Problem of the Day
                      </span>
                    </div>
                    <h2 className="font-space-grotesk text-4xl font-bold tracking-tight group-hover:text-[var(--devcode-tertiary)] transition-colors">
                      412. Longest Palindromic Subsequence
                    </h2>
                    <p className="font-space-grotesk text-lg text-[var(--devcode-on-surface-variant)]">
                      Given a string s, find the longest palindromic
                      subsequence&apos;s length in s. You may assume that the
                      maximum length of s is 1000.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-[var(--devcode-surface-container-high)] px-3 py-1 font-space-grotesk text-xs font-semibold border-2 border-[var(--devcode-on-surface)]">
                        Dynamic Programming
                      </span>
                      <span className="bg-[var(--devcode-surface-container-high)] px-3 py-1 font-space-grotesk text-xs font-semibold border-2 border-[var(--devcode-on-surface)]">
                        String
                      </span>
                    </div>
                  </div>
                  <button className="bg-[var(--devcode-primary-container)] text-[var(--devcode-on-surface)] px-8 py-4 font-space-grotesk font-bold text-xl border-2 border-[var(--devcode-on-surface)] neo-shadow animate-pulse-shadow whitespace-nowrap cursor-pointer">
                    ATTEMPT NOW
                  </button>
                </div>
              </div>

              {/* Learning Paths Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {learningPaths.map((path, index) => (
                  <div
                    key={path.title}
                    className="animate-slide-up bg-[var(--devcode-surface-container-low)] border-2 border-[var(--devcode-on-surface)] p-8 neo-shadow group"
                    style={{ animationDelay: `${0.1 + (index + 1) * 0.05}s` }}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="bg-[var(--devcode-surface)] border-2 border-[var(--devcode-on-surface)] p-4">
                        <span className="material-symbols-outlined text-3xl">
                          {path.icon}
                        </span>
                      </div>
                      <span className="font-space-grotesk text-xs font-bold uppercase text-[var(--devcode-on-surface-variant)]">
                        {path.problemCount}
                      </span>
                    </div>
                    <h3 className="font-space-grotesk text-2xl font-bold mb-4 tracking-tight text-[var(--devcode-on-surface)]">
                      {path.title}
                    </h3>
                    <p className="font-space-grotesk text-[var(--devcode-on-surface-variant)] mb-8">
                      {path.description}
                    </p>
                    <div className="bg-[var(--devcode-surface)] border-2 border-[var(--devcode-on-surface)] h-4 overflow-hidden">
                      <div
                        className="h-full animate-fill-progress"
                        style={{
                          width: `${path.progress}%`,
                          backgroundColor: path.color,
                          borderRight: "2px solid var(--devcode-on-surface)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Leaderboard */}
              <div
                className="animate-slide-up border-2 border-[var(--devcode-on-surface)] bg-[var(--devcode-surface)] overflow-hidden neo-shadow"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="p-6 border-b-2 border-[var(--devcode-on-surface)] bg-[var(--devcode-primary-container)] flex justify-between items-center">
                  <h3 className="font-space-grotesk text-xl font-bold">
                    LEADERBOARD
                  </h3>
                  <span className="material-symbols-outlined">
                    emoji_events
                  </span>
                </div>
                <div className="divide-y-2 divide-[var(--devcode-on-surface)]">
                  {leaderboardUsers.map((user) => (
                    <div
                      key={user.rank}
                      className="p-6 flex items-center justify-between hover:bg-[var(--devcode-surface-container-low)] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="font-space-grotesk text-2xl font-bold italic"
                          style={{ color: user.color }}
                        >
                          {String(user.rank).padStart(2, "0")}
                        </span>
                        <Image
                          alt={user.name}
                          src={user.avatar}
                          width={48}
                          height={48}
                          className="border-2 border-[var(--devcode-on-surface)] grayscale"
                        />
                        <span className="font-space-grotesk font-bold text-sm uppercase">
                          {user.name}
                        </span>
                      </div>
                      <span
                        className="font-space-grotesk font-bold"
                        style={{ color: user.color }}
                      >
                        {user.points.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 font-space-grotesk font-bold uppercase tracking-widest text-sm hover:bg-[var(--devcode-on-surface)] hover:text-[var(--devcode-surface)] transition-colors cursor-pointer">
                  View Rankings
                </button>
              </div>

              {/* Forum Card */}
              <div
                className="animate-slide-up border-2 border-[var(--devcode-on-surface)] bg-[var(--devcode-secondary)] p-8 neo-shadow relative group overflow-hidden"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative z-10 space-y-6">
                  <div className="bg-[var(--devcode-surface)] border-2 border-[var(--devcode-on-surface)] p-4 w-fit">
                    <span className="material-symbols-outlined text-[var(--devcode-secondary)] text-3xl">
                      forum
                    </span>
                  </div>
                  <h3 className="font-space-grotesk text-3xl font-bold leading-none text-[var(--devcode-on-surface)]">
                    Join the Discussion
                  </h3>
                  <p className="font-space-grotesk font-medium text-[var(--devcode-surface-container)]">
                    Connect with thousands of engineers. Share solutions and get
                    feedback.
                  </p>
                  <button className="w-full bg-[var(--devcode-surface)] text-[var(--devcode-on-surface)] font-space-grotesk font-bold py-4 border-2 border-[var(--devcode-on-surface)] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform cursor-pointer">
                    GO TO FORUMS
                  </button>
                </div>
                <span
                  className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12 text-[var(--devcode-surface)]"
                  aria-hidden="true"
                >
                  groups
                </span>
              </div>

              {/* Pro Tip */}
              <div
                className="animate-slide-up p-8 border-2 border-[var(--devcode-on-surface)] bg-[var(--devcode-tertiary)] text-white border-l-[12px] border-l-[var(--devcode-primary-container)]"
                style={{ animationDelay: "0.25s" }}
              >
                <p className="font-space-grotesk text-xs font-bold uppercase mb-4 text-[var(--devcode-primary-container)]">
                  Pro Tip
                </p>
                <p className="font-space-grotesk text-lg italic leading-snug">
                  &ldquo;Space complexity is as important as time complexity.
                  Always consider in-place algorithms for large datasets.&rdquo;
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
