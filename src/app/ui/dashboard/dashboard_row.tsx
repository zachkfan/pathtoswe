import React from "react";
import Status from "./status_tag";

interface Props {
  company: string;
  role: string;
  location: string;
  date_posted: string;
  date_applied: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

const dashboard_row = ({
  company,
  role,
  location,
  date_posted,
  date_applied,
  status,
}: Props) => {
  return (
    <tr>
      <td>{company}</td>
      <td>{role}</td>
      <td>{location}</td>
      <td>{date_posted}</td>
      <td>{date_applied}</td>
      <td>
        <Status status={status} />
      </td>
    </tr>
  );
};

export default dashboard_row;
