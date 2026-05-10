import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Submission {
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  language: string;
  timeAgo: string;
  status: string;
}

interface RecentSubmissionsProps {
  submissions: Submission[];
}

export function RecentSubmissions({ submissions }: RecentSubmissionsProps) {
  return (
    <div className="space-y-4">
      {submissions.map((submission, index) => (
        <Card
          key={index}
          className="bg-white border-4 border-primary p-4 neo-shadow flex justify-between items-center group hover:bg-surface-bright transition-colors"
        >
          <CardContent className="p-0 flex-1">
            <h3 className="font-headline font-black text-xl uppercase">
              {submission.title}
            </h3>
            <div className="flex gap-2 mt-1">
              <Badge
                variant={submission.difficulty === "HARD" ? "destructive" : "default"}
                className="text-xs font-black uppercase border border-primary"
              >
                {submission.difficulty}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs font-black uppercase border border-primary"
              >
                {submission.language}
              </Badge>
            </div>
          </CardContent>
          <div className="text-right ml-4">
            <span className="text-tertiary font-black uppercase tracking-tighter text-lg italic">
              {submission.status}
            </span>
            <p className="text-xs font-headline font-bold uppercase text-on-surface-variant">
              {submission.timeAgo}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
