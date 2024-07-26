import React from "react";
import FilterButton from "./filter_button";
import { FilterType } from "@/app/lib/types";

const FilterModal = ({
  setFilter,
  filter,
}: {
  setFilter: (filter: string[]) => void;
  filter: string[];
}) => {
  // TODO: Add more filters or more related words
  const locations: FilterType = {
    "New York, NY": ["New York", "NYC"],
    "Chicago, IL": ["Chicago"],
    "Seattle, WA": ["Seattle"],
    "Washington, D.C": ["Washington", "DC", "D.C"],
    "Palo Alto, CA": ["Palo Alto"],
    Canada: ["Canada"],
  };
  const roles: FilterType = {
    SWE: ["Software Engineer", "SWE", "Develop"],
    Quant: ["Quant"],
    "AI/ML": ["AI", "ML", "Artificial Intelligence", "Machine Learning"],
    Data: ["Data"],
    "UI/UX": ["UI", "UX", "User Experience", "User Interface"],
  };

  return (
    <div className="flex flex-row flex-wrap content-evenly gap-3 place-content-center">
      <h4 className="w-full text-black-gray">Locations: </h4>
      {Object.keys(locations).map((location) => (
        <FilterButton
          key={location}
          value={locations[location]}
          setFilter={setFilter}
          filter={filter}
        >
          {location}
        </FilterButton>
      ))}
      <h4 className="w-full text-black-gray">Roles: </h4>
      {Object.keys(roles).map((role) => (
        <FilterButton
          key={role}
          value={roles[role]}
          setFilter={setFilter}
          filter={filter}
        >
          {role}
        </FilterButton>
      ))}
    </div>
  );
};

export default FilterModal;
