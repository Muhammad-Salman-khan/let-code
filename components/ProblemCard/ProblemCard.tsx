'use client';

import { Button } from "@/components/ui/button";

export function ProblemCard({ problem }: { problem: any }) {
  return (
    <div className="border-2 border-on-surface bg-surface p-5 neo-shadow hover:-translate-y-1 transition-transform group">
      <div className="flex justify-between items-start mb-4">
        <span className={`inline-block px-3 py-0.5 text-[10px] font-space-grotesk font-black uppercase ${problem.difficultyColor} border-2 border-on-surface`}>
          {problem.difficulty}
        </span>
        <span className="material-symbols-outlined text-primary group-hover:fill-current">
          bookmark
        </span>
      </div>
      <h3 className="text-xl font-space-grotesk font-black leading-tight mb-2 group-hover:underline">
        {problem.title}
      </h3>
      <div className="flex justify-between items-center mt-6">
        <div className="text-xs font-space-grotesk font-bold uppercase">
          {problem.acceptance} ACC.
        </div>
        <Button className="bg-primary-container border-2 border-on-surface px-4 py-1.5 text-xs font-black uppercase neo-shadow">
          Solve
        </Button>
      </div>
    </div>
  );
}