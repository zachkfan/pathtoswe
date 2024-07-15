import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { authConfig } from './auth.config';

 
const prisma = new PrismaClient()
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,  
  session:{
    strategy:"jwt",
  },
  debug: process.env.NODE_ENV === "development",
})