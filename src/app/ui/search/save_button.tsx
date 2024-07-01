"use client";
import React from "react";
import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const hide_button = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <button onClick={() => setTimeout(rowHidden, 125)}>
      {
        <BookmarkIcon className=" w-6 text-black hidden hover:fill-red-500 lg:block"></BookmarkIcon>
      }
    </button>
  );
};

export default hide_button;
