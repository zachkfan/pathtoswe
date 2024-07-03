import React, { useState } from "react";
import clsx from "clsx";

interface Props {
  children: string;
}

const FilterButton = ({ children }: Props) => {
  const [clicked, setClick] = useState(false);

  return (
    <>
      <button
        className={clsx(
          "btn btn-ghost rounded-full w-[30%] px-[2.5%] border border-black",
          clicked && "bg-black-gray text-white"
        )}
        onClick={() => {
          setClick(!clicked);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default FilterButton;
