import React from "react";
import Link from "next/link";

const apply_button = ({ href }: { href: string }) => {
  return (
    <>
      <Link href={href} className=" hidden lg:block">
        <button className="bg-black-gray text-white rounded-md text-sm font-sans px-7 py-1">
          Apply
        </button>
      </Link>
      <div className="dropdown block lg:hidden bg-black-gray text-white rounded-md text-sm w-32 px-7 py-1">
        <div tabIndex={0} role="button" className="bg-black-gray text-white">
          See More
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow text-black-gray"
        >
          <li>
            <Link href={href}>Apply Link</Link>
          </li>
          <li>
            <a>Save</a>
          </li>
          <li>
            <a>Hide</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default apply_button;
