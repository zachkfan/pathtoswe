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
import SortBy from "@/app/ui/dashboard/sort_by";
import Toggle from "@/app/ui/dashboard/toggle";
import ButtonModal from "../btn_modal";
import ModalEdit from "./edit_modal";

type TabType = "All" | "Pending" | "Closed" | "Hired" | "Interviewed";

const SearchBarAndTable = () => {
  const [search, setSearch] = useState("");
  const [cardView, setCardView] = useState(true);
  const [tab, setTab] = useState<TabType>("All");

  return (
    <>
      <div className="flex justify-between w-full my-4 px-8">
        <SortingCard
          status="All"
          icon={RectangleStackIcon}
          applicationCount={2}
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
          applicationCount={2}
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
          applicationCount={15}
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
          applicationCount={7}
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
          applicationCount={3}
          bgColor="#DCFCE7"
          iconBgColor="#3CD856"
          onClick={() => {
            setTab("Hired");
          }}
          selected={tab === "Hired"}
        />
      </div>
      <div className="flex flex-row items-center w-full justify-between px-8 py-4">
        <SearchBar setSearch={setSearch} isDashboard={true} />
        <div className="flex flex-row items-center gap-6">
          <ButtonModal
            btnClassName="rounded-lg relative w-10 xl:w-52 h-10 cursor-pointer flex items-center border border-white bg-black-gray group hover:bg-black-gray active:bg-black-gray active:border-green-500"
            closeBtnClassName="btn btn-sm bg-black border-none text-black font-bold hover:bg-black/80 h-10 px-4 w-40 text-white"
            closeBtnContent={"Add Application"}
            end={true}
            btnContent={
              <>
                <span className="text-white font-semibold ml-8 transform group-hover:translate-x-32 transition-all duration-300 xl:flex hidden">
                  Add Application
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-black-gray flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                  </svg>
                </span>
              </>
            }
          >
            <ModalEdit type={"Add"} />
          </ButtonModal>
          <Toggle cardView={cardView} setCardView={setCardView} />
          <SortBy />
        </div>
      </div>
      <Table search={search} cardView={cardView} tab={tab} />
    </>
  );
};

export default SearchBarAndTable;
