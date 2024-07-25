"use client";

import React from "react";
import Hide from "./hide_button";
import Save from "./save_button";
import Apply from "./apply_button";
import { useState } from "react";
import clsx from "clsx";
import LocationDropdown from "../location_dropdown";
import { SignUpResponseType } from "@/app/lib/types";
import { mutate } from "swr";

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
  const [errorMessage, setErrorMessage] = useState("");

  // TODO: implement optimistic update
  const hideRow = async (item_status: "Search" | "Hidden" | "Saved") => {
    try {
      const response = await fetch("/api/search", {
        method: "PUT",
        body: JSON.stringify({
          internshipId: item_id,
          status: item_status,
        }),
      });
      if (response.ok) {
        setHidden(!isHidden);
        await Promise.all([
          mutate({ url: "/api/search", tab: item_status }),
          mutate({ url: "/api/search", tab: currentTab }),
        ]);
      } else {
        const result = (await response.json()) as SignUpResponseType;
        setErrorMessage(result.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      }
    } catch (error) {
      return "Something went wrong";
    }
  };

  return (
    <>
      {errorMessage && (
        <div
          role="alert"
          className="alert alert-error w-fit fixed left-1/2 bottom-5 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
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
            rowHidden={() => {
              setHidden(!isHidden);
            }}
          ></Apply>
        </td>
      </tr>
    </>
  );
};

export default Row;
