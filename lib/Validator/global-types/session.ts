"use strict";
import { z } from "zod";
import { zUser } from "./user";

// Zod schema for Session
export const zSession = z.object({
  user: zUser,
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date(),
  token: z.string(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
});

// TypeScript type inferred from Zod schema
export type Session = z.infer<typeof zSession>;
