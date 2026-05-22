"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Delete, Star, Zap, Skull } from "lucide-react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@/components/ui/combobox";

export function CreateProblem() {
  const [testCases, setTestCases] = useState<
    { id: number; input: string; output: string }[]
  >([{ id: Date.now(), input: "", output: "" }]);
  const [tags, setTags] = useState<string[]>([]);
  const tagsAnchor = useComboboxAnchor();
  const [difficulty, setDifficulty] = useState<string>('');
  const difficultyAnchor = useComboboxAnchor();
  const [language, setLanguage] = useState<string>('Python');
  const languageAnchor = useComboboxAnchor();

  const addCase = () => {
    setTestCases([...testCases, { id: Date.now(), input: "", output: "" }]);
  };

  const removeCase = (id: number) => {
    setTestCases(testCases.filter((c) => c.id !== id));
  };

  const handleCaseChange = (
    id: number,
    field: "input" | "output",
    value: string,
  ) => {
    setTestCases(
      testCases.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen">
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-8 flex-1">
        {/* Problem Metadata */}
        <Card className="neo-border p-8 neo-shadow">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-label text-label-bold uppercase tracking-widest text-on-surface">
                Problem Title
              </Label>
              <Input
                placeholder="e.g. Invert Binary Tree"
                className="bg-surface-container p-4"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label className="font-label text-label-bold uppercase tracking-widest text-on-surface">
                  Difficulty
                </Label>
                <div ref={difficultyAnchor}>
                  <Combobox
                    anchor={difficultyAnchor}
                    value={difficulty}
                    onValueChange={setDifficulty}
                  >
                    <ComboboxInput
                      placeholder="Select difficulty"
                      className="bg-surface-container"
                    />
                    <ComboboxContent>
                      <ComboboxList>
                        <ComboboxItem value="EASY">
                          <Star className="mr-2" />
                          EASY
                        </ComboboxItem>
                        <ComboboxItem value="MEDIUM">
                          <Zap className="mr-2" />
                          MEDIUM
                        </ComboboxItem>
                        <ComboboxItem value="HARD">
                          <Skull className="mr-2" />
                          HARD
                        </ComboboxItem>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-label text-label-bold uppercase tracking-widest text-on-surface">
                  Tags
                </Label>
                <div className="flex flex-col gap-2">
                  {/* Tags Combobox */}
                  <div className="flex flex-col gap-2" ref={tagsAnchor}>
                    <Combobox anchor={tagsAnchor}>
                      <ComboboxChips className="bg-surface-container p-2">
                        {tags.map((tag) => (
                          <ComboboxChip key={tag}>{tag}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput
                          placeholder="Add tags..."
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === ",") {
                              e.preventDefault();
                              const target = e.target as HTMLInputElement;
                              const value = target.value.trim();
                              if (value && !tags.includes(value)) {
                                setTags([...tags, value]);
                              }
                              target.value = "";
                            }
                          }}
                        />
                      </ComboboxChips>
                    </Combobox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Problem Description */}
        <Card className="bg-surface-container neo-border neo-shadow flex flex-col flex-1 overflow-auto">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-on-surface bg-surface-container-high">
            <CardTitle className="font-label text-label-bold uppercase tracking-widest">
              Problem Description
            </CardTitle>
            <div className="flex gap-4">
              <Button variant="link" className="underline decoration-2">
                Markdown
              </Button>
              <Button
                variant="link"
                className="text-on-surface-variant opacity-50"
              >
                Preview
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <Textarea
              placeholder="Describe the challenge details here. Use Markdown for formatting code blocks or emphasis."
              rows={50}
            />
          </CardContent>
        </Card>

        {/* Code Template */}
        <Card className="bg-surface-container neo-border neo-shadow flex flex-col flex-1 w-full overflow-auto">
          <CardHeader className="flex items-center justify-between border-b-2 border-on-surface px-8 py-4 bg-surface-container-high text-on-surface">
            <CardTitle className="font-label text-label-bold uppercase tracking-widest">
              Starter Code Template
            </CardTitle>
<div ref={languageAnchor}>
  <Combobox anchor={languageAnchor} value={language} onValueChange={setLanguage}>
    <ComboboxInput placeholder="Select language" className="bg-surface-container" />
    <ComboboxContent>
      <ComboboxList>
        <ComboboxItem value="Python">Python 3</ComboboxItem>
        <ComboboxItem value="TypeScript">TypeScript</ComboboxItem>
        <ComboboxItem value="Rust">Rust</ComboboxItem>
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
</div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto bg-surface-container-high">
            <Textarea
              className="w-full bg-surface-container-high text-on-surface font-mono text-sm resize-none"
              rows={10}
              spellCheck={false}
              defaultValue={`class Solution:\n    def solve(self, input_data: List[int]) -> int:\n        # Your structural logic here\n        pass`}
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 space-y-8">
        {/* Test Cases & Constraints */}
        <Card className="bg-surface-container neo-border p-6 neo-shadow">
          <CardHeader>
            <CardTitle className="font-label text-label-bold uppercase tracking-widest mb-6">
              Test Cases &amp; Constraints
            </CardTitle>
          </CardHeader>
          <CardContent
            className="space-y-6"
            onWheel={(e) => {
              if (e.deltaY > 0) {
                addCase();
              }
            }}
          >
            {testCases.map((tc, idx) => (
              <div key={tc.id} className="p-4 bg-surface-container neo-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase">
                    Case {idx + 1}
                  </span>
                  <Delete
                    className="material-symbols-outlined text-sm cursor-pointer"
                    onClick={() => removeCase(tc.id)}
                  />
                </div>
                <div className="space-y-3">
                  <Input
                    placeholder="Input"
                    value={tc.input}
                    onChange={(e) =>
                      handleCaseChange(tc.id, "input", e.target.value)
                    }
                    className="bg-surface-container p-4"
                  />
                  <Input
                    placeholder="Expected Output"
                    value={tc.output}
                    onChange={(e) =>
                      handleCaseChange(tc.id, "output", e.target.value)
                    }
                    className="bg-surface-container p-4"
                  />
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full neo-border border-dashed p-4 flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
              onClick={addCase}
            >
              <Plus className="material-symbols-outlined" />
              Add Test Case
            </Button>
            <hr className="border-on-surface opacity-10" />
            <div className="flex flex-col gap-2">
              <Label className="font-label text-label-bold uppercase text-[10px]">
                Time Limit (ms)
              </Label>
              <Input
                type="number"
                defaultValue={1000}
                className="bg-surface-container p-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="font-label text-label-bold uppercase text-[10px]">
                Memory Limit (MB)
              </Label>
              <Input
                type="number"
                defaultValue={256}
                className="bg-surface-container p-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Helpful Card */}
        <Card className="bg-secondary-container neo-border p-6 neo-shadow">
          <CardHeader>
            <CardTitle className="font-label text-label-bold uppercase mb-2">
              Authoring Tip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-body">
              Clear constraints lead to better solutions. Ensure your test cases
              cover edge scenarios like empty inputs or maximum allowed values.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
