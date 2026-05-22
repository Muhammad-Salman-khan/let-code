import { Footer } from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LeaderboardPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--devcode-surface)] text-[var(--devcode-on-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-4xl">
                <h1 className="font-headline text-[80px] md:text-[120px] font-black leading-[0.9] tracking-tighter uppercase mb-4">
                  GLOBAL
                  <br />
                  <span className="text-primary">LEADERBOARD</span>
                </h1>
                <p className="text-lg font-bold uppercase tracking-wide max-w-xl border-l-8 border-secondary p-4 bg-surface-container">
                  The definitive ranking of technical excellence. Ascend the
                  grid, deploy the truth, and claim your place among the elite
                  architects of ÉclairCode.
                </p>
              </div>
              <div className="bg-secondary-container p-6 neo-border-thick neo-shadow w-full md:w-auto">
                <div className="text-xs font-bold uppercase mb-2">
                  NEXT SEASON RESET
                </div>
                <div className="text-2xl font-black">14D : 02H : 45M</div>
              </div>
            </div>
          </section>

          {/* Podium Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 bg-surface-container-high neo-border-thick neo-shadow p-8 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  alt="Code_Wizard"
                  className="w-32 h-32 neo-border-thick bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDd5Ge4bBigdkRnx7PFME8qh9601GSGK47gCDkoQL9s_lOKsFPd23_MxxiaRsJP_I7Wg3qXnaa_RDdJKd-j2sG8Y0i31NK0b5t87qh953LzMOfaHlUkXePeFdk_e_Ed8C-cd-gOonHRDLsy4m2QOXcUnpWTL_hpVWathfVnx5XMY3Jy6fHHHKhfIu72AyZVgAGCyXfi1Dh5jWD0ruU75Mu7oOFpJUerMvM040jAqG7zDXkmA6sEytGTyC5abrF__2rJ4uIyWKYfw"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface text-on-surface neo-border px-4 py-1 font-black text-xl">
                  #2
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                Code_Wizard
              </h3>
              <div className="bg-on-surface text-surface px-4 py-1 font-bold text-sm mb-4">
                9,842 PTS
              </div>
              <div className="flex gap-2">
                <span className="bg-secondary px-2 py-1 text-on-secondary text-[10px] font-black uppercase">
                  React Master
                </span>
                <span className="bg-primary px-2 py-1 text-on-primary text-[10px] font-black uppercase">
                  Top 1%
                </span>
              </div>
            </div>
            {/* Rank 1 */}
            <div className="order-1 md:order-2 bg-primary-container neo-border-thick neo-shadow-lg p-10 flex flex-col items-center text-center md:-translate-y-8">
              <div className="relative mb-6">
                <img
                  alt="Alex_Nodes"
                  className="w-48 h-48 neo-border-thick bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Nv18nrvF8wxcMsX4_y6r_WFNlMywzI7kDynbnkSIgrQXt9Cui84T_Cn4RLXbpNrjefP3MKmxsoRiyN-fnq962C3H4lzp2oX4yAIzLAg8IkIFHnoC2smi6R0yXR0l9PuNd9IuE-IhG_pyvbSBsw_M9-mLWLQ6750L9Ii7Vncsmr9pZEoAvCN0xJDSzH3Av3KNcRONPL7WEBhYYVeAHHywoLlOOmdIu3vlgEskI4Wm8W1CPXb_X8OC7ta652QFv1s1cF56cJLeIQ"
                />
                <div className="absolute -top-6 -right-6 bg-secondary-fixed text-on-secondary-fixed neo-border-thick px-4 py-2 font-black text-3xl shadow-[4px_4px_0px_0px_#1c1b1b]">
                  #1
                </div>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-on-primary-container mb-2">
                Alex_Nodes
              </h3>
              <div className="bg-on-surface text-surface px-6 py-2 font-black text-2xl mb-4 italic">
                12,504 PTS
              </div>
              <div className="flex gap-3">
                <span className="bg-secondary-container px-3 py-1 text-on-secondary-container text-xs font-black uppercase neo-border">
                  Kernel Legend
                </span>
                <span className="bg-white px-3 py-1 text-on-surface text-xs font-black uppercase neo-border">
                  Architect
                </span>
              </div>
            </div>
            {/* Rank 3 */}
            <div className="order-3 bg-surface-container-high neo-border-thick neo-shadow p-8 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  alt="Algo_Queen"
                  className="w-32 h-32 neo-border-thick bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd0GDpJbZgq3fYlpDhqsjcnv6eafp7keG7Pk1OsTHsq9OGqzTFdONPqEE2XfCgC0oqBT7TUoC_AiqajtGp_14LO9OQJpOEsMwLAmpEZMjosTUOkfxG2wQwQGL8zxbqFPb_hKWt2pql6RPjgcWh3TR-kMr9W17RrRPvwsrmLPNGPDuxr8LoDhZ31ckHG_8sCdhaPhIFSCVV2Ft5ko06zzBGnnVysaFkxwM8OMggvGShpSmuV-wlootRCiLr5KNAXELhpMFLb0kXHQ"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface text-on-surface neo-border px-4 py-1 font-black text-xl">
                  #3
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                Algo_Queen
              </h3>
              <div className="bg-on-surface text-surface px-4 py-1 font-bold text-sm mb-4">
                9,210 PTS
              </div>
              <div className="flex gap-2">
                <span className="bg-tertiary px-2 py-1 text-on-tertiary text-[10px] font-black uppercase">
                  Algo Specialist
                </span>
                <span className="bg-primary px-2 py-1 text-on-primary text-[10px] font-black uppercase">
                  Elite
                </span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Rankings Table */}
            <div className="lg:col-span-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  THE GRID
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="neo-border bg-on-surface text-surface font-bold text-xs uppercase"
                  >
                    Global
                  </Button>
                  <Button
                    variant="outline"
                    className="neo-border hover:bg-surface-container font-bold text-xs uppercase"
                  >
                    Regional
                  </Button>
                  <Button
                    variant="outline"
                    className="neo-border hover:bg-surface-container font-bold text-xs uppercase"
                  >
                    Friends
                  </Button>
                </div>
              </div>
              <div className="neo-border-thick neo-shadow overflow-hidden bg-surface">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-highest border-b-2 border-on-surface">
                      <th className="p-4 font-black uppercase text-sm">Rank</th>
                      <th className="p-4 font-black uppercase text-sm">User</th>
                      <th className="p-4 font-black uppercase text-sm text-center">
                        Solved
                      </th>
                      <th className="p-4 font-black uppercase text-sm text-right">
                        Points
                      </th>
                      <th className="p-4 font-black uppercase text-sm text-center">
                        Streak
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 4 */}
                    <tr className="border-b-2 border-on-surface hover:bg-surface-container transition-colors group">
                      <td className="p-4 font-black text-xl italic text-on-surface-variant">
                        04
                      </td>
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 neo-border bg-primary-fixed"></div>
                        <span className="font-bold uppercase tracking-tight">
                          System_Root
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold">1,204</td>
                      <td className="p-4 text-right font-black text-primary">
                        8,950
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-secondary-container neo-border px-2 py-1 text-xs font-black">
                          42 🔥
                        </span>
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="border-b-2 border-on-surface hover:bg-surface-container transition-colors">
                      <td className="p-4 font-black text-xl italic text-on-surface-variant">
                        05
                      </td>
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 neo-border bg-secondary-fixed"></div>
                        <span className="font-bold uppercase tracking-tight">
                          Dev_Ops_God
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold">1,180</td>
                      <td className="p-4 text-right font-black text-primary">
                        8,420
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-secondary-container neo-border px-2 py-1 text-xs font-black">
                          15 🔥
                        </span>
                      </td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="border-b-2 border-on-surface hover:bg-surface-container transition-colors">
                      <td className="p-4 font-black text-xl italic text-on-surface-variant">
                        06
                      </td>
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 neo-border bg-tertiary-fixed"></div>
                        <span className="font-bold uppercase tracking-tight">
                          Null_Pointer
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold">1,050</td>
                      <td className="p-4 text-right font-black text-primary">
                        7,810
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-surface-container-highest neo-border px-2 py-1 text-xs font-black">
                          0 🔥
                        </span>
                      </td>
                    </tr>
                    {/* Row 7 */}
                    <tr className="border-b-2 border-on-surface hover:bg-surface-container transition-colors">
                      <td className="p-4 font-black text-xl italic text-on-surface-variant">
                        07
                      </td>
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 neo-border bg-surface-variant"></div>
                        <span className="font-bold uppercase tracking-tight">
                          Binary_Beast
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold">998</td>
                      <td className="p-4 text-right font-black text-primary">
                        7,240
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-secondary-container neo-border px-2 py-1 text-xs font-black">
                          128 🔥
                        </span>
                      </td>
                    </tr>
                    {/* Row 8 */}
                    <tr className="border-b-2 border-on-surface hover:bg-surface-container transition-colors">
                      <td className="p-4 font-black text-xl italic text-on-surface-variant">
                        08
                      </td>
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 neo-border bg-primary-container"></div>
                        <span className="font-bold uppercase tracking-tight">
                          Script_Kiddie_01
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold">945</td>
                      <td className="p-4 text-right font-black text-primary">
                        6,900
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-secondary-container neo-border px-2 py-1 text-xs font-black">
                          5 🔥
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4 text-center bg-surface-container-low border-t-2 border-on-surface">
                  <Button
                    variant="link"
                    className="font-black uppercase tracking-widest text-sm underline-offset-4 p-0"
                  >
                    LOAD NEXT 50 ENTRIES
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* User Status Card */}
            <div className="bg-primary neo-border-thick neo-shadow p-8 text-on-primary">
              <h3 className="text-2xl font-black uppercase mb-6 leading-none tracking-tighter">
                YOUR STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-on-primary/30 pb-2">
                  <span className="text-xs font-bold uppercase opacity-80">
                    CURRENT RANK
                  </span>
                  <span className="text-2xl font-black">#1,428</span>
                </div>
                <div className="flex justify-between items-center border-b border-on-primary/30 pb-2">
                  <span className="text-xs font-bold uppercase opacity-80">
                    PERCENTILE
                  </span>
                  <span className="text-2xl font-black">TOP 12%</span>
                </div>
                <div className="flex justify-between items-center border-b border-on-primary/30 pb-2">
                  <span className="text-xs font-bold uppercase opacity-80">
                    TOTAL POINTS
                  </span>
                  <span className="text-2xl font-black">2,405</span>
                </div>
                <div className="pt-4">
                  <div className="text-[10px] font-black uppercase mb-2">
                    NEXT TIER: ELITE (3,000 PTS)
                  </div>
                  <div className="h-4 w-full bg-white/20 neo-border p-0.5">
                    <div className="h-full bg-secondary-fixed w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full mt-8 bg-on-surface text-surface neo-border py-3 font-black uppercase tracking-widest hover:italic transition-all">
              VIEW PROGRESS
            </Button>

            {/* Trending Contests */}
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                TRENDING
              </h3>
              <div className="space-y-4">
                <div className="neo-border p-4 bg-surface hover:neo-shadow-blue transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-tertiary text-on-tertiary px-2 py-0.5 text-[10px] font-black uppercase">
                      Live
                    </span>
                    <span className="text-xs font-bold uppercase">
                      Ends in 4h
                    </span>
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-1">
                    Matrix Factorization Blitz
                  </h4>
                  <p className="text-xs uppercase font-medium text-on-surface-variant">
                    2,400 Participants • 500 XP
                  </p>
                </div>
                <div className="neo-border p-4 bg-surface hover:neo-shadow-yellow transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-secondary text-on-secondary px-2 py-0.5 text-[10px] font-black uppercase">
                      Upcoming
                    </span>
                    <span className="text-xs font-bold uppercase">
                      Starts in 2d
                    </span>
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-1">
                    The CSS Architect Cup
                  </h4>
                  <p className="text-xs uppercase font-medium text-on-surface-variant">
                    1,200 Registered • 200 XP
                  </p>
                </div>
                <div className="neo-border p-4 bg-surface hover:neo-shadow-blue transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-primary text-on-primary px-2 py-0.5 text-[10px] font-black uppercase">
                      Stable
                    </span>
                    <span className="text-xs font-bold uppercase">Weekly</span>
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-1">
                    Algorithm Sunday #142
                  </h4>
                  <p className="text-xs uppercase font-medium text-on-surface-variant">
                    6,500 Participants • 1000 XP
                  </p>
                </div>
              </div>
            </div>

            {/* Global Stats Banner */}
            <div className="neo-border-thick p-6 bg-surface-container-highest relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase leading-none mb-2">
                  NETWORK
                  <br />
                  CAPACITY
                </h3>
                <p className="text-xs font-black uppercase mb-4">
                  TOTAL REPOS SOLVED: 1.2M
                </p>
                <div className="text-5xl font-black text-primary tracking-tighter">
                  99.9%
                </div>
                <div className="text-xs font-black uppercase">
                  UPTIME GUARANTEED
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary opacity-20 rotate-45"></div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
