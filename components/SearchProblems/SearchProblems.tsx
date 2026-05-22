'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchProblems() {
  return (
    <div className="flex items-center gap-4 w-full mb-8">
      <div className="flex-grow">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search problems, topics, or companies..."
            className="w-full"
          />
        </div>
      </div>
      <Button className="bg-primary text-on-primary font-space-grotesk font-bold uppercase tracking-tighter">
        Search
      </Button>
    </div>
  );
}