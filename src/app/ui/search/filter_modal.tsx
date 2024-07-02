import React from "react";
import FilterButton from "./filter_button";

const FilterModal = () => {
  const locations = [
    "New York, NY",
    "Chicago, IL",
    "Seattle, WA",
    "Washington, D.C",
    "Pao Alto, CA",
    "Toronto, Canada",
  ];

  const roles = ["SWE", "Quant", "AI/ML"];
  return (
    <div className="flex flex-row flex-wrap content-evenly gap-3 place-content-center">
      <h4 className="w-full">Locations: </h4>
      {locations.map((location) => (
        <FilterButton key={location}>{location}</FilterButton>
      ))}
      <h4 className="w-full">Roles: </h4>
      {roles.map((role) => (
        <FilterButton key={role}>{role}</FilterButton>
      ))}
    </div>
  );
};

export default FilterModal;
