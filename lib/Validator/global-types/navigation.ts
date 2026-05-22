"use strict";
import { z } from "zod";

// Zod schema for Navigation Link
const zLink = z.object({
  href: z.string(),
  label: z.string(),
});

// Zod schema for Navigation Props
export const zNavigationProps = z.object({
  activePath: z.string().optional(),
  user: z
    .object({
      name: z.string(),
      avatar: z.string().url().nullable().optional(),
      rank: z.string().optional(),
      points: z.number().optional(),
      role: z.enum(["USER", "ADMIN", "GUEST"]).optional(),
    })
    .optional(),
  links: z
    .array(zLink)
    .default([
      { href: "/problems", label: "Problems" },
      { href: "/leaderboard", label: "Leaderboard" },
    ])
    .optional(),
  theme: z.enum(["light", "dark"]).optional(),
  onThemeToggle: z.function().optional(),
  onNotificationsClick: z.function().optional(),
  onLogout: z.function().optional(),
  showDropdown: z.boolean().optional(),
});

// TypeScript type inferred from Zod schema
export type NavigationProps = z.infer<typeof zNavigationProps>;
