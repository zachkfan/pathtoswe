import { auth } from "@/auth";
import AccountForm from "@/app/ui/account/form";

export default async function Page() {
  const session = await auth();

  return (
    <div className="p-6 flex flex-row justify-center items-end gap-4">
      <div className="pl-24 flex flex-col items-center w-fit">
        <h1 className="text-4xl text-black-gray font-bold mb-12 w-fit">
          Account Settings
        </h1>
        <div className="flex flex-row gap-4 items-end w-fit">
          <form className="flex flex-col gap-4 w-[33vw]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black-gray">Name</span>
              </div>
              <input
                type="text"
                name="username"
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
                name="email"
                placeholder={session?.user.email}
                className="input input-bordered w-full bg-transparent border-2 border-gray-300 focus:border-gray-300 text-black-gray"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black-gray">
                  Current Password
                </span>
              </div>
              <input
                type="text"
                name="current_password"
                placeholder="Current Password"
                className="input input-bordered w-full bg-transparent border-2 border-gray-300 focus:border-gray-300 text-black-gray"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black-gray">New Password</span>
              </div>
              <input
                type="text"
                name="password"
                placeholder="New Password"
                className="input input-bordered w-full bg-transparent border-2 border-gray-300 focus:border-gray-300 text-black-gray"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black-gray">
                  Confirm Password
                </span>
              </div>
              <input
                type="text"
                name="password2"
                placeholder="Confirm Password"
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
        </div>
      </div>
      <DeleteButton id={session?.user.id}></DeleteButton>
    <div className="p-6">
      <h1 className="text-4xl text-black-gray font-bold mb-12">
        Account Settings
      </h1>
      <AccountForm session={session}></AccountForm>
    </div>
  );
}
