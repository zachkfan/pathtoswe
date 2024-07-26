import React, { useState } from "react";
import clsx from "clsx";

interface Props {
  children: string;
  setFilter: (filter: string[]) => void;
  filter: string[];
}

const FilterButton = ({ children, setFilter, filter }: Props) => {
  const [clicked, setClick] = useState(false);

  return (
    <>
      <button
        className={clsx(
          "btn rounded-full w-[30%] px-[2.5%] border-0",
          clicked ? "bg-black-gray text-white" : "bg-concrete-gray text-gray"
        )}
        onClick={() => {
          setClick(!clicked);
          setFilter(
            clicked
              ? filter.filter((f) => f !== children)
              : [...filter, children]
          );
        }}
      >
        {children}
      </button>
    </>
  );
};

export default FilterButton;
