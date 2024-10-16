"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Session } from "next-auth";
import DeleteButton from "@/app/ui/account/delete_button";
import { useState } from "react";

const Form = ({ session }: { session: Session | null }) => {
  const [userInfo, setUserInfo] = useState([
    session?.user.name,
    session?.user.email,
  ]);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (session) {
      try {
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const old_password = formData.get("current_password");
        const password = formData.get("password");
        const password2 = formData.get("password2");
        const response = await fetch("api/account", {
          method: "POST",
          body: JSON.stringify({
            id: session.user.id,
            username: username,
            email: email,
            old_password: old_password,
            password: password,
            password2: password2,
          }),
        });
        const result = (await response.json()) as { message: string };
        console.log(result);
        if (response.ok) {
          console.log("This gets ran");
          toast.success("Edit Success");
          setUserInfo([
            username as string | null | undefined,
            email ? (email as string | null | undefined) : session.user.email,
          ]);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("Something Went Wrong");
        return "Something Went Wrong";
      }
    }
  }
  return (
    <>
      <Toaster toastOptions={{ className: "text-black font-semibold" }} />
      <div className="p-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="pl-0 md:pl-24 flex flex-col items-center w-full md:w-fit">
          <h1 className="text-4xl text-black-gray font-bold mb-12 w-full text-center md:text-center">
            Account Settings
          </h1>
          <form
            className="flex flex-col gap-4 w-full md:w-[33vw]"
            onSubmit={handleSubmit}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black-gray">Name</span>
              </div>
              <input
                type="text"
                name="username"
                placeholder={userInfo[0] as string | undefined}
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
                placeholder={userInfo[1] as string | undefined}
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
            <div className="mt-5 flex flex-col md:flex-row justify-between">
              <input
                type="submit"
                value="Save Changes"
                className="btn btn-info mb-2 md:mb-0"
              />
              <input type="reset" value="Cancel" className="btn btn-outline" />
            </div>
          </form>
          <div className="flex justify-end mt-5 w-full">
            <DeleteButton id={session?.user.id}></DeleteButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
