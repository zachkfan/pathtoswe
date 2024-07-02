"use client";
import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const SaveButton = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <button onClick={() => setTimeout(rowHidden, 125)}>
      {
        <BookmarkIcon className=" w-6 text-black hidden hover:fill-black lg:block"></BookmarkIcon>
      }
    </button>
  );
};

export default SaveButton;
