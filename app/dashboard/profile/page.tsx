import { ProfileHeader } from "@/components//ProfileHeader/ProfileHeader";
import { StatsGrid } from "@/components//StatsGrid/StatsGrid";
import { ActivityHeatmap } from "@/components//ActivityHeatmap/ActivityHeatmap";
import { RecentSubmissions } from "@/components//RecentSubmissions/RecentSubmissions";
import { Proficiency } from "@/components//Proficiency/Proficiency";
import { Achievements } from "@/components//Achievements/Achievements";
import { Footer } from "@/components/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserData } from "@/lib/Validator/global-types";
import { zUser } from "@/lib/Validator/global-types";

// Mock data - replace with actual data fetching
const userData: UserData = {
  name: "Alex_Nodes",
  rank: 1429,
  totalPoints: 28450,
  globalTop: 0.4,
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5kMmxlmC0Kqwht55jPwdOr4m5Z5CCTBkTavzHmmW6_ae6dW9JdeM4VgLIwsae8ibWPYA2r91Rm31A4_QQHwt4F8sCFEnmLGQ-QQ2eE41A2U9au_1s1Uq69XAr-JZ314lCj3-VnlKyHXff9CCIENAGgzAUDYOAIZ31YJRBKcDL7jp7bI-KdF__ppBE8Potv0YzsXAmSiD1YuQyNijxNa2JUvV4O7Edn6lHOclLnP0OSM2TOhbQgTXecfenP5eq7pz0tXnkDiMxA",
  stats: [
    {
      icon: "terminal",
      label: "Problems Solved",
      value: 1248,
      color: "bg-primary-container",
    },
    {
      icon: "local_fire_department",
      label: "Current Streak",
      value: "42 DAYS",
      color: "bg-secondary text-white",
    },
    {
      icon: "analytics",
      label: "Contest Rating",
      value: 2105,
      color: "bg-tertiary text-white",
    },
  ],
  proficiency: [
    { language: "Python", percentage: 94, color: "bg-primary-container" },
    { language: "JavaScript", percentage: 82, color: "bg-tertiary" },
    { language: "C++", percentage: 65, color: "bg-secondary" },
  ],
  recentSubmissions: [
    {
      title: "LRU Cache Implementation",
      difficulty: "HARD",
      language: "Python",
      timeAgo: "2 hours ago",
      status: "ACCEPTED",
    },
    {
      title: "Valid Parentheses",
      difficulty: "EASY",
      language: "JavaScript",
      timeAgo: "5 hours ago",
      status: "ACCEPTED",
    },
    {
      title: "Binary Tree Maximum Path Sum",
      difficulty: "HARD",
      language: "C++",
      timeAgo: "1 day ago",
      status: "ACCEPTED",
    },
  ],
  achievements: [
    {
      icon: "military_tech",
      label: "Elite Solver",
      color: "bg-primary-container",
    },
    { icon: "bolt", label: "Speed Coder", color: "bg-tertiary" },
    { icon: "trophy", label: "Contest Winner", color: "bg-secondary" },
    { icon: "star", label: "Mentor", color: "bg-surface-dim" },
  ],
};

export default async function ProfilePage() {
  const data = await auth.api.getSession({
    headers: await headers(),
  });

  if (!data?.session) {
    return (
      <div className="min-h-screen bg-background text-primary font-body antialiased flex items-center justify-center">
        <p className="text-2xl">User not found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-primary font-body antialiased">
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <ProfileHeader
          userData={{
            user: { ...data.user, role: data.user.role as "USER" | "ADMIN" },
          }}
          user={userData}
        />

        <StatsGrid stats={userData.stats} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-6">
              <h2 className="text-4xl font-display font-black uppercase border-b-4 border-primary pb-2">
                Activity Heatmap
              </h2>
              <ActivityHeatmap />
            </section>

            <section className="space-y-6">
              <h2 className="text-4xl font-display font-black uppercase border-b-4 border-primary pb-2">
                Recent Submissions
              </h2>
              <RecentSubmissions submissions={userData.recentSubmissions} />
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <section className="space-y-6">
              <h2 className="text-4xl font-display font-black uppercase border-b-4 border-primary pb-2">
                Proficiency
              </h2>
              <Proficiency items={userData.proficiency} />
            </section>

            <section className="space-y-6">
              <h2 className="text-4xl font-display font-black uppercase border-b-4 border-primary pb-2">
                Achievements
              </h2>
              <Achievements achievements={userData.achievements} />
            </section>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
