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

export default function Signin() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <>
      {errorMessage && (
        <div
          role="alert"
          className="alert alert-error w-fit absolute bottom-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="flex items-center justify-between w-3/4 lg:w-2/3 bg-white text-black rounded-lg overflow-hidden h-[60vh] lg:h-[80vh]">
        <div className="flex-col justify-center py-6 px-6 lg:px-8 xl:py-8 xl:px-16 w-1/2">
          <Header title={"Sign in"}></Header>
          <form action={formAction}>
            <TextBox
              title={"Email"}
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
    </>
  );
}
