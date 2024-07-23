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
  currentTab: "Search" | "Hidden" | "Saved";
}

//maybe change usersession to worldwide but for now leave
const Row = ({
  item_id,
  company,
  role,
  location,
  datePosted,
  applyLink,
  currentTab,
}: Props) => {
  const [isHidden, setHidden] = useState(true);

  const hideRow = async (item_status: "Search" | "Hidden" | "Saved") => {
    try {
      setHidden(!isHidden);
      await fetch("/api/search", {
        method: "PUT",
        body: JSON.stringify({
          internshipId: item_id,
          status: item_status,
        }),
      });
    } catch {
      console.log("Error something went wrong");
    }
  };

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
        <div className="flex gap-7 justify-center h-6">
          <Save rowHidden={hideRow} currentTab={currentTab} />
          <Hide rowHidden={hideRow} currentTab={currentTab} />
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
