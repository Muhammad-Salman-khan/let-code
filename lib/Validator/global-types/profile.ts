"use strict";
import { z } from "zod";

// Zod schema for Stats
const zStat = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.union([z.number(), z.string()]),
  color: z.string(),
});

// Zod schema for Proficiency
const zProficiency = z.object({
  language: z.string(),
  percentage: z.number().min(0).max(100),
  color: z.string(),
});

// Zod schema for RecentSubmission
const zRecentSubmission = z.object({
  title: z.string(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  language: z.string(),
  timeAgo: z.string(),
  status: z.string(),
});

// Zod schema for Achievement
const zAchievement = z.object({
  icon: z.string(),
  label: z.string(),
  color: z.string(),
});

// Zod schema for UserData (Profile Page)
export const zUserData = z.object({
  name: z.string(),
  rank: z.number(),
  totalPoints: z.number(),
  globalTop: z.number().min(0).max(100), // Percentage
  avatarUrl: z.string().url().optional(),
  stats: z.array(zStat),
  proficiency: z.array(zProficiency),
  recentSubmissions: z.array(zRecentSubmission),
  achievements: z.array(zAchievement),
});

// TypeScript type inferred from Zod schema
export type UserData = z.infer<typeof zUserData>;