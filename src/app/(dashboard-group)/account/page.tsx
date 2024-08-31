import { auth } from "@/auth";
import AccountForm from "@/app/ui/account/form";

export default async function Page() {
  const session = await auth();

  return (
    <div className="p-6">
      <h1 className="text-4xl text-black-gray font-bold mb-12">
        Account Settings
      </h1>
      <AccountForm session={session}></AccountForm>
    </div>
  );
}
