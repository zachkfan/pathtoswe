"use client";
import React from "react";
import Image from "next/image";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const hide_button = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <button onClick={() => setTimeout(rowHidden, 125)}>
      <EyeSlashIcon className="w-6 text-black hidden hover:fill-red-500 lg:block" />
    </button>
  );
};

export default hide_button;
