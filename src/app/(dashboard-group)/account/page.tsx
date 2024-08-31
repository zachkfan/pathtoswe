import { auth } from "@/auth";
import AccountForm from "@/app/ui/account/form";

export default async function Page() {
  const session = await auth();

  return <AccountForm session={session}></AccountForm>;
}
