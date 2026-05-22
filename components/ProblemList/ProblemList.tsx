'use client';

import { ProblemCard } from "@/components/ProblemCard/ProblemCard";

const problems = [
  {
    id: 1,
    title: "TWO SUM REDUX",
    difficulty: "Easy",
    acceptance: "88%",
    difficultyColor: "bg-green-400"
  },
  {
    id: 2,
    title: "LRU CACHE ARCHITECTURE",
    difficulty: "Medium",
    acceptance: "52%",
    difficultyColor: "bg-yellow-400"
  },
  {
    id: 3,
    title: "WORD LADDER II",
    difficulty: "Hard",
    acceptance: "24%",
    difficultyColor: "bg-red-400"
  },
  {
    id: 4,
    title: "VALID SUDOKU SOLVER",
    difficulty: "Medium",
    acceptance: "48%",
    difficultyColor: "bg-yellow-400"
  }
];

export function ProblemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
}