"use client";

import React from "react";
import Hide from "./hide_button";
import Save from "./save_button";
import Apply from "./apply_button";
import { useState } from "react";
import clsx from "clsx";
import LocationDropdown from "../location_dropdown";
import { SignUpResponseType, InternshipsType } from "@/app/lib/types";
import { mutate } from "swr";

interface Props {
  item_id: number;
  company: string;
  role: string;
  location: string;
  datePosted: string;
  applyLink: string;
  currentTab: "Search" | "Hidden" | "Saved";
  showToast: (message: string, type: "success" | "error") => void;
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
  showToast,
}: Props) => {
  const [isHidden, setHidden] = useState(true);

  const hideRow = async (item_status: "Pending" | "Hidden" | "Saved") => {
    const previousStatus = currentTab;
    const updateStatus = async () => {
      const response = await fetch("/api/search", {
        method: "PUT",
        body: JSON.stringify({
          internshipId: item_id,
          status: item_status,
        }),
      });

      if (!response.ok) {
        const result = (await response.json()) as SignUpResponseType;
        showToast(result.message, "error");
        throw new Error(result.message);
      }
    };

    try {
      // Optimistically update the UI
      await mutate(
        { url: "/api/search", tab: previousStatus },
        (data: InternshipsType[] = []) => {
          console.log("Current data in mutate:", data);
          return data.filter((item: InternshipsType) => item.id !== item_id);
        },
        false // don't revalidate yet
      );

      // Immediately hide the row
      setHidden(false);

      // Update the status on the server
      await updateStatus();

      // Revalidate to sync with the server
      await Promise.all([
        mutate({
          url: "/api/search",
          tab:
            item_status === "Pending" || item_status === currentTab
              ? "Search"
              : item_status,
        }),
        mutate({ url: "/api/search", tab: currentTab }),
      ]);

      showToast(
        "Internship ".concat(
          item_status === previousStatus
            ? "un" + previousStatus.toLowerCase()
            : item_status.toLowerCase()
        ),
        "success"
      );
    } catch (error) {
      showToast("Something went wrong", "error");
      setHidden(true);
      await mutate({ url: "/api/search", tab: previousStatus });
      return "Something went wrong";
    }
  };

  return (
    <>
      <tr
        className={clsx("h-14", !isHidden ? "hidden " : "display")}
        key={item_id}
      >
        <td>{company}</td>
        <td>{role}</td>
        <td>
          <LocationDropdown location={location} format="search row" />
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
            rowHidden={hideRow}
          ></Apply>
        </td>
      </tr>
    </>
  );
};

export default Row;
