import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const SaveButton = ({
  rowHidden,
  currentTab,
}: {
  rowHidden: (item_status: "Pending" | "Hidden" | "Saved") => void;
  currentTab: "Search" | "Hidden" | "Saved";
}) => {
  return (
    <div className="tooltip" data-tip="Save">
      <button
        onClick={() => {
          rowHidden("Saved");
        }}
      >
        {
          <BookmarkIcon
            className={clsx(
              " w-6 text-black hidden lg:block",
              currentTab == "Saved"
                ? "fill-black hover:fill-none"
                : "hover:fill-black"
            )}
          ></BookmarkIcon>
        }
      </button>
    </div>
  );
};

export default SaveButton;
