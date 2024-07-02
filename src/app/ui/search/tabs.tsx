import React from "react";
import Search from "./search_bar_and_table";

const Tabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered pl-10">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab border-concrete-gray"
        aria-label="Search"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content py-10">
        <Search />
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Saved"
      />
      <div role="tabpanel" className="tab-content p-10">
        No Jobs Saved Yet!
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Hidden"
      />
      <div role="tabpanel" className="tab-content p-10">
        No Jobs Hidden Yet!
      </div>
    </div>
  );
};

export default Tabs;
