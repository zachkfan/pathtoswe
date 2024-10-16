"use client";

import React from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";
import Image from "next/image";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/credentialsSignIn";
import toast, { Toaster } from "react-hot-toast";

export default function Signin() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  if (errorMessage) {
    toast.error(errorMessage);
  }

  return (
    <>
      <Toaster toastOptions={{ className: "text-black font-semibold" }} />
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-2/3 bg-white text-black rounded-lg overflow-hidden h-auto lg:h-[70vh] p-4 lg:p-0">
        <div className="flex flex-col justify-center py-6 px-6 lg:px-8 xl:py-8 xl:px-16 w-full lg:w-1/2">
          <Header title={"Sign in"} />
          <form action={formAction}>
            <TextBox
              title={"Email"}
              icon={UserIcon}
              inputType="email"
              name="email"
            />
            <TextBox
              title={"Password"}
              icon={KeyIcon}
              inputType="password"
              name="password"
            />
            <Button login={"Sign in"} />
          </form>

          <OrDiv />
          <GoogleBox login={"in"} />
          <SignLink
            login={"Sign up"}
            link={"/sign_up"}
            member={"Not a member?"}
          />
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 h-full">
          <Image
            src="/Sign_in.png"
            alt="Gray and black art"
            width={5000}
            height={5000}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
