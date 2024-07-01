"use client";
import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

const hide_button = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <button onClick={() => setTimeout(rowHidden, 125)}>
      <EyeSlashIcon className="w-6 text-black hidden hover:fill-black lg:block" />
    </button>
  );
};

export default hide_button;
