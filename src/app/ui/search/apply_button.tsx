import React from "react";
import Link from "next/link";

const apply_button = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <button className="bg-black-gray text-white rounded-md text-xl font-sans px-7">
        Apply
      </button>
    </Link>
  );
};

export default apply_button;
