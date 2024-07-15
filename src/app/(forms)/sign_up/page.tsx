"use client";
import React, { useState } from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";
import { UserIcon, KeyIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import { register } from "@/app/api/register/actions";

export default function Signup() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const password2 = formData.get("password2");
      console.log(name, email, password);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          pasword2: password2,
        }),
      });
      setErrorMessage(response.statusText);
    } catch (error) {
      return "Something Went Wrong";
    }
  }

  const [errorMessage, setErrorMessage] = useState("");
  return (
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
      <div>
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
      <OrDiv></OrDiv>
      <GoogleBox login={"up"}></GoogleBox>
      <SignLink
        login={"Sign in"}
        link={"/sign_in"}
        member={"Already a member?"}
      ></SignLink>
    </div>
  );
}
