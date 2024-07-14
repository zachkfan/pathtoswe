import NextAuth from "next-auth";

declare module "next-auth" {
interface Session {
    user: {
      id: string;
      name: string?;
      email: string;
      image: string?;
      // Add any other properties you have on your user object
    };
  }

  interface User {
    id: string;
    // name: string?;
    email: string;
    // emailVerified: Date?;
    // image: string?;
    // Add any other properties you have on your user object
  }
}