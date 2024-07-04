"use client";

import React, { useState } from "react";
import Select, {
  SingleValue,
  components,
  ControlProps,
  StylesConfig,
  GroupBase,
  CSSObjectWithLabel,
} from "react-select";

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

  const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
    control: (
      provided: CSSObjectWithLabel,
      state: ControlProps<OptionType, false, GroupBase<OptionType>>
    ): CSSObjectWithLabel => ({
      ...provided,
      background: "#fff",
      minHeight: "48px",
      height: "48px",
      boxShadow: state.isFocused ? "0" : "0",
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      "&:hover": {
        border: "1px solid #e5e7eb",
      },
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: "48px",
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "darkgray"
        : state.isFocused
        ? "gray"
        : "white",
      color: "black",
      ":active": {
        backgroundColor: state.isSelected ? "darkgray" : "gray",
      },
    }),
  };

  return (
    <Select
      defaultValue={options[0]}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className="w-40 xl:w-52 text-sm"
      components={{ Control }}
      styles={customStyles}
    />
  );
}
