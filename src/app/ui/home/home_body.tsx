import React from "react";
import Image from "next/image";
import SignUpButton from "./body_signup";

const home_body = () => {
  return (
    <div className="bg-concrete-gray px-[18%] py-24 grid grid-cols-12 gap-12">
      <div className="col-span-12 lg:col-span-5">
        <h2 className="text-3xl pb-5 font-semibold">PathToSWE</h2>
        <h1 className="text-4xl font-bold pb-5">
          Use us to Find and Track Your Next Internship
        </h1>
        <p className="text-xl leading-8 pb-5 font-serif">
          {" "}
          <b>PathToSWE</b> is your ultimate companion for navigating software
          engineering internships. Find new positions, track your current
          applications, and stay organized as you embark on your journey to a
          successful career in tech. Simplify your{" "}
          <b>Path To Software Engineering</b> success with our user-friendly
          tools and resources.
        </p>
        <SignUpButton />
      </div>
      <div className="col-span-12 lg:col-span-7">
        <Image
          src="/home_photo.jpg"
          width={800}
          height={800}
          alt="Man typing on latptop"
          className="pt-12"
        ></Image>
      </div>
    </div>
  );
};

export default home_body;
