import React from "react";
import Hide from "./hide_button";
import Save from "./save_button";
import Apply from "./apply_button";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  applyLink: string;
}

const row = ({ company, role, location, datePosted, applyLink }: Props) => {
  return (
    <tr>
      <td>{company}</td>
      <td>{role}</td>
      <td>{location}</td>
      <td className="pr-0">{datePosted}</td>
      <td className="flex content-around gap-7 justify-center px-0">
        <Save />
        <Hide />
      </td>
      <td className="pl-0">
        <Apply href={applyLink}></Apply>
      </td>
    </tr>
  );
};

export default row;
