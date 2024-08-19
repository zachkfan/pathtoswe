import { auth } from "@/auth";
import DeleteButton from "@/app/ui/account/delete_button";

export default async function Page() {
  const session = await auth();

  return (
    <div className="p-6">
      <h1 className="text-4xl text-black-gray font-bold mb-12">
        Account Settings
      </h1>
      <div className="flex flex-row justify-between items-end">
        <form className="flex flex-col gap-4 w-[33vw]">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black-gray">Name</span>
            </div>
            <input
              type="text"
              placeholder={session?.user.name as string | undefined}
              className="input input-bordered w-full bg-transparent border-2 border-gray-300 focus:border-gray-300 text-black-gray"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black-gray">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-transparent border-2 border-gray-300 focus:border-gray-300 text-black-gray"
            />
          </label>
          <div className="mt-5 flex flex-row justify-between">
            <input
              type="submit"
              value="Save Changes"
              className="btn btn-info "
            />
            <input type="reset" value="Cancel" className="btn btn-outline" />
          </div>
        </form>
        <DeleteButton id={session?.user.id}></DeleteButton>
      </div>
    </div>
  );
}
