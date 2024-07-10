import React from "react";
import Link from "next/link";

const BodySignup = () => {
  return (
    <Link href="sign_up">
      <button className="text-white shadow-2xl bg-black-gray cursor-pointer w-56 h-16 text-3xl text-center rounded-full font-bold hover:scale-110 duration-100">
        Sign Up
      </button>
    </Link>
  );
};

export default BodySignup;
