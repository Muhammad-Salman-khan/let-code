"use strict";
import { z } from "zod";

// Zod schema for User
export const zUser = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  image: z.string().url().nullable().optional(), // Handles null/undefined
  role: z.enum(["USER", "ADMIN", "GUEST"]).default("USER"),
  emailVerified: z.boolean().optional(),
});

// TypeScript type inferred from Zod schema
export type User = z.infer<typeof zUser>;