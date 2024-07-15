import type { NextAuthConfig } from 'next-auth';
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {hash, compare} from 'bcryptjs'
import prisma from "./app/libs/prismadb"

export const authConfig = {
  pages: {signIn: '/sign_in'},
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [
    Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  })
  ,
    CredentialsProvider({
      name: "credentials",
      credentials:{
        email:{ label: "E-mail", type: "email", placeholder: "example@user.com"},
        password:{label: "Password", type: "password", placeholder: "password"},
    },
    authorize: async(credentials) => {
        const email = String(credentials.email);
        const password = String(credentials.password);
        const pwHash = await hash(password, 12)
        
        // if (!email || !password){
        //   console.log("Email or password not provided")
        //   throw new Error("no info provided")
        // }
        if (email && password) {
        const user = 
            await prisma.user.findUnique({
            where:{
            email : email
            }
        })
        if (user != null) {
            const isPasswordValid = await compare(user.password, pwHash);
            return isPasswordValid ? user : null;
        }
        }

        return null;

        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error("User not found.")
        // }
        // const isPasswordValid = await compare(user.password, pwHash)
        // //switch user.passwrod and pwHash later on cuz i didn't hash seeeded password

        // if (!isPasswordValid){
        //   throw new Error("Password not valid.")
        // }

        // // return user object with the their profile data
    },
    }),] // Add providers with an empty array for now
} satisfies NextAuthConfig;