import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../prisma";
import { polar, checkout, portal } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import polarClient from "../polar";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24 * 30,
  },
  account: {
    encryptOAuthTokens: true,
    updateAccountOnSignIn: true,
    storeStateStrategy: "cookie",
    storeAccountCookie: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "d18c9505-5f25-460d-ba48-47eaa9817e27",
              slug: "basic-Plan", // Custom slug for easy reference in Checkout URL, e.g. /checkout/basic-Plan
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),
      ],
    }),
    portal(),
  ],
});
