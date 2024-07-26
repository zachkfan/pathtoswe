import React from "react";
import FilterButton from "./filter_button";

const FilterModal = ({
  setFilter,
  filter,
}: {
  setFilter: (filter: string[]) => void;
  filter: string[];
}) => {
  const locations = [
    "New York, NY",
    "Chicago, IL",
    "Seattle, WA",
    "Washington, D.C",
    "Palo Alto, CA",
    "Toronto, Canada",
  ];

  const roles = ["SWE", "Quant", "AI/ML", "Data", "UI/UX"];
  return (
    <div className="flex flex-row flex-wrap content-evenly gap-3 place-content-center">
      <h4 className="w-full">Locations: </h4>
      {locations.map((location) => (
        <FilterButton key={location} setFilter={setFilter} filter={filter}>
          {location}
        </FilterButton>
      ))}
      <h4 className="w-full">Roles: </h4>
      {roles.map((role) => (
        <FilterButton key={role} setFilter={setFilter} filter={filter}>
          {role}
        </FilterButton>
      ))}
    </div>
  );
};

export default FilterModal;
