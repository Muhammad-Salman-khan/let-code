import { SearchProblems } from "@/components/SearchProblems/SearchProblems";
import { ProblemFilters } from "@/components/ProblemFilters/ProblemFilters";
import { ProblemList } from "@/components/ProblemList/ProblemList";
import { ProblemCard } from "@/components/ProblemCard/ProblemCard";
import { UserStats } from "@/components/UserStats/UserStats";
import { TrendingTopics } from "@/components/TrendingTopics/TrendingTopics";

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SearchProblems />
            <ProblemFilters />
            <ProblemList />
          </div>
          <div className="lg:col-span-1">
            <UserStats />
            <TrendingTopics />
          </div>
        </div>
      </div>
    </div>
  );
}
