import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const SaveButton = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <div className="tooltip" data-tip="Save">
      <button onClick={() => setTimeout(rowHidden, 125)}>
        {
          <BookmarkIcon className=" w-6 text-black hidden hover:fill-black lg:block"></BookmarkIcon>
        }
      </button>
    </div>
  );
};

export default SaveButton;
