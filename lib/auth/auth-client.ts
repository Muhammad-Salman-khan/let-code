import { polarClient } from "@polar-sh/better-auth";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
      },
    },
  },
});

export const {
  signIn,
  signUp,
  useSession,
  changeEmail,
  resetPassword,
  signOut,
  revokeSessions,
} = authClient;
