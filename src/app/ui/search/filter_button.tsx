import React, { useState } from "react";
import clsx from "clsx";
import { FiltersType } from "@/app/lib/types";

interface Props {
  children: string;
  setFilter: (filter: FiltersType) => void;
  filter: FiltersType;
  value: string[];
  type: "location" | "role";
}

const FilterButton = ({ children, setFilter, filter, value, type }: Props) => {
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
          if (type === "location") {
            setFilter({
              ...filter,
              locations: clicked
                ? filter.locations.filter((f) => !value.includes(f))
                : [...filter.locations, ...value],
            });
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          } else if (type === "role") {
            setFilter({
              ...filter,
              roles: clicked
                ? filter.roles.filter((f) => !value.includes(f))
                : [...filter.roles, ...value],
            });
          }
        }}
      >
        {children}
      </button>
    </>
  );
};

export default FilterButton;
