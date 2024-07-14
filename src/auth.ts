import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {hash, compare} from 'bcryptjs'
// import { PrismaAdapter } from "@auth/prisma-adapter"
import type { User } from "next-auth"
import client from "./app/libs/prismadb"

 
const prisma = client
export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
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
    
    if (!email || !password){
      console.log("Email or password not provided")
      throw new Error("no info provided")
      return null
    }
    const user = 
        await prisma.user.findUnique({
      where:{
        email : email
      }
    })

    if (!user) {
      // No user found, so this is their first attempt to login
      // meaning this is also the place you could do registration
      return null
    }
    const isPasswordValid = await compare(user.password, pwHash)
    //switch user.passwrod and pwHash later on cuz i didn't hash seeeded password

    if (!isPasswordValid){
      return null
    }

    // return user object with the their profile data
    return user
 },
}),],
  secret: process.env.AUTH_SECRET,
  session:{
    strategy:"jwt",
  },
  debug: process.env.NODE_ENV === "development",
})