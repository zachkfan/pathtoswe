import React from "react";
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from "../../ui/login_components/header";
import OrDiv from "../../ui/login_components/or_div";
import SignLink from "../../ui/login_components/signup_link";
import TextBox from "../../ui/login_components/text_box";
import Button from "../../ui/login_components/button";

export default function Signup() {
  return (
    <div className="flex-col justify-center w-1/3 py-8 px-16 bg-white text-black rounded-lg">
      <Header title={"Sign up"}></Header>
      <form>
        <TextBox title={"Name"}></TextBox>
        <TextBox title={"Email"}></TextBox>
        <TextBox title={"Password"}></TextBox>
        <TextBox title={"Confirm Password"}></TextBox>
      </form>
      <Button login={"Sign up"}></Button>
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
