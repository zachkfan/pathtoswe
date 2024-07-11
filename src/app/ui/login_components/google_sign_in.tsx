import React from "react";
import Image from "next/image";
import { signIn } from "@/auth";

interface Props {
  login: string;
}

const GoogleBox = ({ login }: Props) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 h-12 w-full"
        >
          <Image
            src="/google_logo.png"
            alt="Logo of Google"
            width={800}
            height={800}
            className="w-8 h-8"
          ></Image>
          <span className="text-gray-700 font-semibold w-full mr-9">
            Sign {login} with Google
          </span>
        </button>
      </div>
    </form>
  );
};

export default GoogleBox;
