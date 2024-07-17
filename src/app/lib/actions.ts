"use server";

import { redirect } from "next/navigation";

// async because redirect in nextjs is async
// eslint-disable-next-line @typescript-eslint/require-await
export async function navigate(route: string) {
  redirect(`/${route}`);
}
