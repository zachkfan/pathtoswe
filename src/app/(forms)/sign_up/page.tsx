"use client";

import React, { useState } from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";
import { UserIcon, KeyIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { navigate } from "@/app/lib/actions";
import { SignUpResponseType } from "@/app/lib/types";

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
        setRegisterSuccess(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        void navigate("sign_in");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      return "Something Went Wrong";
    }
  }

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      {registerSuccess && (
        <div role="alert" className="alert alert-success absolute top-4 w-fit">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Account Created! Redirecting in 3 seconds.</span>
        </div>
      )}
      {!registerSuccess && errorMessage && (
        <div
          role="alert"
          className="alert alert-error w-fit absolute bottom-20"
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
      <div className="flex flex-col justify-center w-1/2 lg:w-1/3 py-2 px-4 lg:py-4 lg:px-8 xl:py-8 xl:px-16 bg-white text-black rounded-lg">
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
