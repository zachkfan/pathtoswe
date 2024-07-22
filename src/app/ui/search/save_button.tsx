import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const SaveButton = ({
  rowHidden,
}: {
  rowHidden: (item_status: "Hidden" | "Saved") => void;
}) => {
  return (
    <div className="tooltip" data-tip="Save">
      <button onClick={() => rowHidden("Saved")}>
        {
          <BookmarkIcon className=" w-6 text-black hidden hover:fill-black lg:block"></BookmarkIcon>
        }
      </button>
    </div>
  );
};

export default SaveButton;
