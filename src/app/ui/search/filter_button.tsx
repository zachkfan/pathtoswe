import React, { useState } from "react";
import clsx from "clsx";

interface Props {
  children: string;
  setFilter: (filter: string[]) => void;
  filter: string[];
  value: string[];
}

const FilterButton = ({ children, setFilter, filter, value }: Props) => {
  const [clicked, setClick] = useState(false);

  return (
    <>
      <button
        className={clsx(
          "btn rounded-full w-[30%] px-[2.5%] border-0 hover:text-white",
          clicked
            ? "bg-black-gray text-white"
            : "bg-concrete-gray text-black-gray"
        )}
        onClick={() => {
          setClick(!clicked);
          setFilter(
            clicked
              ? filter.filter((f) => !value.includes(f))
              : [...filter, ...value]
          );
        }}
      >
        {children}
      </button>
    </>
  );
};

export default FilterButton;
