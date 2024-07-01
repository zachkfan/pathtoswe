import React from "react";

const StatusTag = ({
  status,
}: {
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}) => {
  const getStatusColor = (): React.CSSProperties => {
    const statusColors: Record<string, string> = {
      Closed: "#FA5A7D",
      Pending: "#FF947A",
      Interviewed: "#BF83FF",
      Hired: "#3CD856",
    };
    return { backgroundColor: statusColors[status] };
  };

  return (
    <span
      className="py-1 px-3 rounded-md font-sans text-sm"
      style={getStatusColor()}
    >
      {status}
    </span>
  );
};

export default StatusTag;
