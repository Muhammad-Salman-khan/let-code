import Head from "next/head";
import { CreateProblem } from "@/components/CreateProblem/CreateProblem";

export default function CreateProblemPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-8 py-12 bg-background text-on-background">
        <section className="mb-12">
          <h1 className="text-headline-xl font-headline font-bold text-on-surface leading-none mb-2">
            CREATE PROBLEM
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Design a new architectural challenge for the community. Precision is
            key.
          </p>
        </section>
        <CreateProblem />
      </main>
    </>
  );
}
