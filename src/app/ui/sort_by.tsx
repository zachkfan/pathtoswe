"use client";

import React, { useState } from "react";
import Select, { SingleValue } from "react-select";

// Define the type for options
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "dateApplied", label: "Date Applied" },
  { value: "datePosted", label: "Date Posted" },
  { value: "role", label: "Role" },
  { value: "location", label: "Location" },
];

export default function SortBy() {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(
    options[0]
  );

  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  return (
    <Select
      defaultValue={options[0]}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className="max-w-36 text-sm"
    />
  );
}
