import React from "react";
import Select from "react-select";

const UncontrolledSelect = () => {
  return (
    <Select
      defaultValue={{ value: "chocolate", label: "Chocolate" }}
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
    />
  );
};

export default UncontrolledSelect;
