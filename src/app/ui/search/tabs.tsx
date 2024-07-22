import React from "react";
import SearchAndTable from "@/app/ui/search/search_bar_and_table";

const Tabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered px-10">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab border-concrete-gray"
        aria-label="Search"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content py-5">
        <SearchAndTable tab="Search"></SearchAndTable>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Saved"
      />
      <div role="tabpanel" className="tab-content py-5">
        <SearchAndTable tab="Saved"></SearchAndTable>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Hidden"
      />
      <div role="tabpanel" className="tab-content p-5">
        <SearchAndTable tab="Hidden"></SearchAndTable>
      </div>
    </div>
  );
};

export default Tabs;
