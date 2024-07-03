"use client";

import React, { useState } from "react";
import Select, { SingleValue, components, ControlProps } from "react-select";

// Define the type for options
interface OptionType {
  value: string;
  label: string;
}

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

  const Control = ({ children, ...props }: ControlProps<OptionType, false>) => (
    <components.Control {...props}>
      <p className="pl-2">Sort By:</p> {children}
    </components.Control>
  );

  return (
    <Select
      defaultValue={options[0]}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className="max-w-52 text-sm"
      components={{ Control }}
    />
  );
}
