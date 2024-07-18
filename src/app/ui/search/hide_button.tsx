import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

const HideButton = ({ rowHidden }: { rowHidden: () => void }) => {
  return (
    <div className="tooltip" data-tip="Hide">
      <button onClick={() => setTimeout(rowHidden, 125)}>
        <EyeSlashIcon className="w-6 text-black hidden hover:fill-black lg:block" />
      </button>
    </div>
  );
};

export default HideButton;
