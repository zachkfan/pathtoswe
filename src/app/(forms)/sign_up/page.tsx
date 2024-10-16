"use client";

import React from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";
import { UserIcon, KeyIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { navigate } from "@/app/lib/actions";
import { SignUpResponseType } from "@/app/lib/types";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const password2 = formData.get("password2");
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password2: password2,
        }),
      });
      const result = (await response.json()) as SignUpResponseType;
      if (response.ok) {
        toast.success("Account Created! Redirecting in 3 seconds");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        void navigate("sign_in");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      return "Something Went Wrong";
    }
  }
  return (
    <>
      <Toaster toastOptions={{ className: "text-black font-semibold" }} />
      <div className="flex flex-col justify-center w-full max-w-md mx-auto py-2 px-4 lg:py-4 lg:px-8 xl:py-8 xl:px-16 bg-white text-black rounded-lg h-[60vh] lg:h-[70vh]">
        <Header title={"Sign up"}></Header>
        <form onSubmit={handleSubmit}>
          <TextBox
            title={"Username"}
            icon={UserIcon}
            inputType="text"
            name="username"
          ></TextBox>
          <TextBox
            title={"Email"}
            icon={EnvelopeIcon}
            inputType="email"
            name="email"
          ></TextBox>
          <TextBox
            title={"Password"}
            icon={KeyIcon}
            inputType="password"
            name="password"
          ></TextBox>
          <TextBox
            title={"Confirm Password"}
            icon={KeyIcon}
            inputType="password"
            name="password2"
          ></TextBox>
          <Button login={"Sign up"}></Button>
        </form>
        <OrDiv></OrDiv>
        <GoogleBox login={"up"}></GoogleBox>
        <SignLink
          login={"Sign in"}
          link={"/sign_in"}
          member={"Already a member?"}
        ></SignLink>
      </div>
    </>
  );
}
