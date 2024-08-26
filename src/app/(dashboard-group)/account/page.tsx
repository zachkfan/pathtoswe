import { auth } from "@/auth";
import toast from "react-hot-toast";
import DeleteButton from "@/app/ui/account/delete_button";

export default async function Page() {
  const session = await auth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const username = formData.get("username");
      const email = formData.get("email");
      const old_password = formData.get("current_password");
      const password = formData.get("password");
      const password2 = formData.get("password2");
      const response = await fetch("/api/account", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          old_password: old_password,
          password: password,
          password2: password2,
        }),
      });
      const result = (await response.json()) as { message: string };
      if (response.ok) {
        toast.success("Account Created! Redirecting in 3 seconds");
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      return "Something Went Wrong";
    }
  }

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
        <DeleteButton id={session?.user.id}></DeleteButton>
      </div>
    </div>
  );
}
