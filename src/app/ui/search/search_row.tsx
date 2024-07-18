"use client";

import React from "react";
import Hide from "./hide_button";
import Save from "./save_button";
import Apply from "./apply_button";
import { useState } from "react";
import clsx from "clsx";
import LocationDropdown from "./location_dropdown";

interface Props {
  item_id: number;
  company: string;
  role: string;
  location: string;
  datePosted: string;
  applyLink: string;
}

const Row = ({
  item_id,
  company,
  role,
  location,
  datePosted,
  applyLink,
}: Props) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <tr
      className={clsx("h-14", !isHidden ? "hidden " : "display")}
      key={item_id}
    >
      <td>{company}</td>
      <td>{role}</td>
      <td>
        <LocationDropdown location={location} />
      </td>
      <td className="pr-0">{datePosted.substring(0, 10)}</td>
      <td className="align-middle">
        <div className="flex gap-7 justify-center">
          <Save
            rowHidden={() => {
              setHidden(!isHidden);
            }}
          />
          <Hide
            rowHidden={() => {
              setHidden(!isHidden);
            }}
          />
        </div>
      </td>
      <td className="pl-0">
        <Apply
          href={applyLink}
          company={company}
          role={role}
          rowHidden={() => {
            setHidden(!isHidden);
          }}
        ></Apply>
      </td>
    </tr>
  );
};

export default Row;
