import React from "react";
import Status from "./status_tag";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

const dashboard_row = ({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  status,
}: Props) => {
  return (
    <tr>
      <td>{company}</td>
      <td>{role}</td>
      <td>{location}</td>
      <td>{datePosted}</td>
      <td>{dateApplied}</td>
      <td>
        <Status status={status} />
      </td>
    </tr>
  );
};

export default dashboard_row;
