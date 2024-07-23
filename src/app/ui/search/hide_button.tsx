import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const HideButton = ({
  rowHidden,
  currentTab,
}: {
  rowHidden: (item_status: "Hidden" | "Saved") => void;
  currentTab: "Search" | "Hidden" | "Saved";
}) => {
  return (
    <div className="tooltip" data-tip="Hide">
      <button
        onClick={() => {
          rowHidden("Hidden");
        }}
      >
        <EyeSlashIcon
          className={clsx(
            " w-6 text-black hidden lg:block",
            currentTab == "Hidden"
              ? "fill-black hover:fill-none"
              : "hover:fill-black"
          )}
        />
      </button>
    </div>
  );
};

export default HideButton;
