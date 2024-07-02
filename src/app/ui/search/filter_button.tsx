import React, { useState } from "react";

interface Props {
  children: string;
}

const FilterButton = ({ children }: Props) => {
  const unClickedStyle =
    "btn btn-ghost rounded-full w-[30%] px-[2.5%] border border-black";
  const ClickedStyle =
    "btn btn-ghost rounded-full w-[30%] px-[2.5%] border border-black bg-black-gray text-white";
  const [style, setStyle] = useState(unClickedStyle);

  return (
    <>
      <button
        className={style}
        onClick={() => {
          style == unClickedStyle
            ? (setStyle(ClickedStyle), console.log("clicked"))
            : setStyle(unClickedStyle);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default FilterButton;
