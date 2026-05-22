import { polarClient } from "@polar-sh/better-auth";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  plugins: [adminClient()],
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
