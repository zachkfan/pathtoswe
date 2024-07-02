"use client";
import React from "react";
import Link from "next/link";

const ApplyButton = ({
  href,
  rowHidden,
}: {
  href: string;
  rowHidden: () => void;
}) => {
  return (
    <>
      <Link href={href} className=" hidden lg:block">
        <button className="bg-black-gray text-white rounded-md text-sm font-sans px-7 py-1 hover:bg-black-gray/80">
          Apply
        </button>
      </Link>
      <div className="dropdown block lg:hidden bg-black-gray text-white rounded-md text-sm w-32 px-7 py-1">
        <div tabIndex={0} role="button" className="bg-black-gray text-white">
          See More
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-[1] w-32 p-2 shadow text-white bg-black-gray"
        >
          <li>
            <Link href={href}>Apply Link</Link>
          </li>
          <li>
            <a onClick={() => setTimeout(rowHidden, 125)}>Save</a>
          </li>
          <li>
            <a onClick={() => setTimeout(rowHidden, 125)}>Hide</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ApplyButton;
