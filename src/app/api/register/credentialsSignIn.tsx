"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// do not remove prevState, it keeps track of the URL the user is on
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return error.message.split("Read more at")[0].trim();
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
