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
import { authenticate } from "@/app/api/register/credentialsSignIn";

export default function Signin() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="flex items-center justify-between w-3/4 lg:w-2/3 bg-white text-black rounded-lg overflow-hidden">
      <div className="flex-col justify-center py-6 px-6 lg:px-8 xl:py-8 xl:px-16 w-1/2">
        <Header title={"Sign in"}></Header>
        <form action={formAction}>
          <TextBox
            title={"Username or Email"}
            icon={UserIcon}
            inputType="text"
            name="email"
          ></TextBox>
          <TextBox
            title={"Password"}
            icon={KeyIcon}
            inputType="password"
            name="password"
          ></TextBox>
          <Button login={"Sign in"}></Button>
        </form>
        <div className="flex justify-center">
          {errorMessage && (
            <p className="text-sm text-red-500 w-fit mt-3">{errorMessage}</p>
          )}
        </div>

        <OrDiv></OrDiv>
        <GoogleBox login={"in"}></GoogleBox>
        <SignLink
          login={"Sign up"}
          link={"/sign_up"}
          member={"Not a member?"}
        ></SignLink>
      </div>
      <Image
        src="/Sign_in.png"
        alt="Gray and black art"
        width={5000}
        height={5000}
        className="w-1/2 h-full"
      ></Image>
    </div>
  );
}
