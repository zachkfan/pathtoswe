import React from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";
import Image from "next/image";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";

export default function Signin() {
  return (
    <div className="flex items-center justify-between w-2/3 bg-white text-black rounded-lg overflow-hidden">
      <div className="flex-col justify-center px-16 py-16 w-1/2">
        <Header title={"Sign in"}></Header>
        <form>
          <TextBox
            title={"Username or Email"}
            icon={UserIcon}
            inputType="text"
          ></TextBox>
          <TextBox
            title={"Password"}
            icon={KeyIcon}
            inputType="password"
          ></TextBox>
        </form>
        <Button login={"Sign in"}></Button>
        <OrDiv></OrDiv>
        <GoogleBox login={"in"}></GoogleBox>
        <SignLink
          login={"Sign up"}
          link={"/sign_up"}
          member={"Not a member?"}
        ></SignLink>
      </div>
      <div className="w-1/2 h-full">
        <Image
          src="/Sign_in.png"
          alt="Logo of Google"
          width={5000}
          height={5000}
        ></Image>
      </div>
    </div>
  );
}
