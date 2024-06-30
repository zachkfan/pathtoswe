import React from "react";

const status_tag = ({
  status,
}: {
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}) => {
  const color = () => {
    switch (status) {
      case "Closed":
        return {
          backgroundColor: "#FA5A7D",
        };
      case "Pending":
        return { backgroundColor: "#FF947A" };
      case "Interviewed":
        return { backgroundColor: "#BF83FF" };
      case "Hired":
        return { backgroundColor: "#3CD856" };
    }
  };

  return (
    <span className="py-1 px-3 rounded-md font-sans text-sm" style={color()}>
      {status}
    </span>
  );
};

export default status_tag;
