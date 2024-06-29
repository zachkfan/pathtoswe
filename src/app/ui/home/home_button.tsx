"use client";
import React from "react";
import Link from "next/link";

const home_button = () => {
  return (
    <Link href="/search">
      <button className="text-black-gray bg-white cursor-pointer w-80 h-16 text-4xl text-center rounded-full font-black hover:scale-110 duration-100 animate-fadeInFromLeft2">
        Start Today
      </button>
    </Link>
  );
};

export default home_button;
