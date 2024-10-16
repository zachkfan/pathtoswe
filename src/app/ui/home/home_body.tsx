import React from "react";
import Image from "next/image";
import SignUpButton from "./body_signup";

const HomeBody = () => {
  return (
    <div className="max-w-full bg-concrete-gray px-4 sm:px-8 md:px-[18%] py-12 sm:py-16 md:py-24 grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 text-black-gray">
      <div className="col-span-12 lg:col-span-5">
        <h2 className="text-lg sm:text-xl md:text-3xl pb-3 sm:pb-4 md:pb-5 font-semibold">
          PathToSWE
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold pb-3 sm:pb-4 md:pb-5">
          Use us to Find and Track Your Next Internship
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 pb-3 sm:pb-4 md:pb-5 font-serif">
          <b>PathToSWE</b> is your ultimate companion for navigating software
          engineering internships. Find new positions, track your current
          applications, and stay organized as you embark on your journey to a
          successful career in tech. Simplify your{" "}
          <b>Path To Software Engineering</b> success with our user-friendly
          tools and resources.
        </p>
        <div className="flex justify-center sm:justify-start">
          <SignUpButton />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <Image
          src="/home_photo.jpg"
          alt="Home Photo"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
    </div>
  );
};

export default HomeBody;
