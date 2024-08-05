import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="p-6">
      <h1 className="text-4xl text-black-gray font-bold mb-12">
        Account Settings
      </h1>
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
        <div className="divider divider-neutral"></div>
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
      </div>
    </div>
  );
}
