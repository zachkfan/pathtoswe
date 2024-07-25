"use client";

import React from "react";
import SearchAndTable from "@/app/ui/search/search_bar_and_table";
import toast, { Toaster } from "react-hot-toast";

const Tabs = () => {
  const showToast = (message: string, type: "success" | "error") => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "text-black font-semibold",
        }}
      />
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
          <SearchAndTable tab="Search" showToast={showToast}></SearchAndTable>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Saved"
        />
        <div role="tabpanel" className="tab-content py-5">
          <SearchAndTable tab="Saved" showToast={showToast}></SearchAndTable>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Hidden"
        />
        <div role="tabpanel" className="tab-content py-5">
          <SearchAndTable tab="Hidden" showToast={showToast}></SearchAndTable>
        </div>
      </div>
    </>
  );
};

export default Tabs;
