"use client";

import React, { useState } from "react";
import Table from "@/app/ui/search/table";
import SearchBar from "@/app/ui/search_bar";

const SearchBarAndTable = ({ tab }: { tab: string }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar setSearch={setSearch} isDashboard={false} />
      <Table search={search} tab={tab} />
    </>
  );
};

export default SearchBarAndTable;
