"use client";

import React, { useState } from "react";
import Table from "@/app/ui/search/table";
import SearchBar from "@/app/ui/search_bar";

const SearchBarAndTable = ({
  tab,
  showToast,
}: {
  tab: "Search" | "Hidden" | "Saved";
  showToast: (message: string, type: "success" | "error") => void;
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <>
      <SearchBar
        setFilter={setFilter}
        filter={filter}
        setSearch={setSearch}
        isDashboard={false}
      />
      <Table search={search} filter={filter} tab={tab} showToast={showToast} />
    </>
  );
};

export default SearchBarAndTable;
