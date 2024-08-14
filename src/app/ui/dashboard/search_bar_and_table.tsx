"use client";

import SortingCard from "@/app/ui/dashboard/sorting_card";
import {
  RectangleStackIcon,
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Table from "@/app/ui/dashboard/table";
import SearchBar from "@/app/ui/search_bar";
import Toggle from "@/app/ui/dashboard/toggle";
import useSWR from "swr";
import { ApplicationCountsType, FiltersType } from "@/app/lib/types";
import AddApplicationButton from "./add_application_btn";

type TabType = "All" | "Pending" | "Closed" | "Hired" | "Interviewed";

const SearchBarAndTable = () => {
  const [search, setSearch] = useState("");
  const [cardView, setCardView] = useState(true);
  const [tab, setTab] = useState<TabType>("All");
  const [filter, setFilter] = useState<FiltersType>({
    locations: [],
    roles: [],
  });

  const fetchApplicationCount = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

  const { data, error } = useSWR<ApplicationCountsType, Error>(
    "/api/dashboard",
    fetchApplicationCount,
    {
      revalidateOnFocus: false, // Disables revalidation when the window gains focus
      refreshInterval: 0, // Disables automatic revalidation
    }
  );
  if (error) {
    return (
      <div className="flex justify-center text-lg p-44 m-auto">
        Failed to load
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex gap-2 justify-center text-lg p-44">
        Loading<span className="loading loading-spinner loading-sm"></span>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between w-full my-4 lg:px-0 xl:px-8">
        <SortingCard
          status="All"
          icon={RectangleStackIcon}
          applicationCount={data.All}
          bgColor="#E8F7FF"
          iconBgColor="#83CBFF"
          onClick={() => {
            setTab("All");
          }}
          selected={tab === "All"}
        />
        <SortingCard
          status="Closed"
          icon={XMarkIcon}
          applicationCount={data.Closed}
          bgColor="#FFE2E5"
          iconBgColor="#FA5A7D"
          onClick={() => {
            setTab("Closed");
          }}
          selected={tab === "Closed"}
        />
        <SortingCard
          status="Pending"
          icon={DocumentTextIcon}
          applicationCount={data.Pending}
          bgColor="#FFF4DE"
          iconBgColor="#FF947A"
          onClick={() => {
            setTab("Pending");
          }}
          selected={tab === "Pending"}
        />
        <SortingCard
          status="Interviewed"
          icon={UsersIcon}
          applicationCount={data.Interviewed}
          bgColor="#F3E8FF"
          iconBgColor="#BF83FF"
          onClick={() => {
            setTab("Interviewed");
          }}
          selected={tab === "Interviewed"}
        />
        <SortingCard
          status="Hired"
          icon={TagIcon}
          applicationCount={data.Hired}
          bgColor="#DCFCE7"
          iconBgColor="#3CD856"
          onClick={() => {
            setTab("Hired");
          }}
          selected={tab === "Hired"}
        />
      </div>
      <div className="flex flex-row items-center w-full justify-between lg:px-0 xl:px-8 py-4">
        <SearchBar
          setFilter={setFilter}
          filter={filter}
          setSearch={setSearch}
          isDashboard={true}
        />
        <div className="flex flex-row gap-4">
          <AddApplicationButton />
          <Toggle cardView={cardView} setCardView={setCardView} />
        </div>
      </div>
      <Table search={search} filter={filter} cardView={cardView} tab={tab} />
    </>
  );
};

export default SearchBarAndTable;
