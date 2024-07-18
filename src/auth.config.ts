import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prismadb";
import { z } from "zod";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";

async function getUser(email: string): Promise<User | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const user: User | null = (await prisma.user.findUnique({
      where: { email },
    })) as User | null;
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const authConfig = {
  pages: { signIn: "/sign_in" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnAccount = nextUrl.pathname.startsWith("/account");
      const isOnSignIn = nextUrl.pathname.startsWith("/sign_in");
      const isOnSignUp = nextUrl.pathname.startsWith("/sign_up");
      if (isOnDashboard || isOnAccount) {
        if (isLoggedIn) return true;
        return false; // redirect to /login
      } else if (isLoggedIn && (isOnSignIn || isOnSignUp)) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      // User is available during sign-in
      token.id = user.id;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "example@user.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({
            email: z
              .string({ required_error: "Email is required" })
              .min(1, "Email is required")
              .email("Invalid email"),
            password: z
              .string({ required_error: "Password is required" })
              .min(1, "Password is required")
              .min(6, "Password must be more than 6 characters")
              .max(32, "Password must be less than 32 characters"),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          const errorMessage = parsedCredentials.error.errors[0].message;
          throw new CredentialsSignin(errorMessage);
        }

        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (user?.password) {
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return user;
          }
        }
        throw new CredentialsSignin("Invalid Email or Password");
      },
    }),
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;
