"use server";

import { signIn } from "@/auth";

const GoogleSignIn = async () => {
  await signIn("google");
};

export default GoogleSignIn;
