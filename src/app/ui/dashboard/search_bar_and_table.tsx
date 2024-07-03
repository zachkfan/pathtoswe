"use client";

import SortingCard from "@/app/ui/dashboard/sorting_card";
import {
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Table from "@/app/ui/dashboard/table";
import SearchBar from "@/app/ui/search_bar";
import SortBy from "@/app/ui/dashboard/sort_by";
import Toggle from "@/app/ui/dashboard/toggle";

const SearchBarAndTable = () => {
  const [search, setSearch] = useState("");
  const [cardView, setCardView] = useState(true);

  return (
    <>
      <div className="flex justify-between w-full my-4 px-10">
        <SortingCard
          status="Closed"
          icon={XMarkIcon}
          applicationCount={2}
          bgColor="#FFE2E5"
          iconBgColor="#FA5A7D"
        />
        <SortingCard
          status="Pending"
          icon={DocumentTextIcon}
          applicationCount={15}
          bgColor="#FFF4DE"
          iconBgColor="#FF947A"
        />
        <SortingCard
          status="Interviewed"
          icon={UsersIcon}
          applicationCount={7}
          bgColor="#F3E8FF"
          iconBgColor="#BF83FF"
        />
        <SortingCard
          status="Hired"
          icon={TagIcon}
          applicationCount={3}
          bgColor="#DCFCE7"
          iconBgColor="#3CD856"
        />
      </div>
      <div className="flex flex-row items-center w-full justify-between px-10">
        <SearchBar setSearch={setSearch} isDashboard={true} />
        <div className="flex flex-row items-center gap-3">
          <Toggle cardView={cardView} setCardView={setCardView} />
          <SortBy />
        </div>
      </div>
      <Table search={search} cardView={cardView} />
    </>
  );
};

export default SearchBarAndTable;
