import Modal from "@/app/ui/modal";
import FilterModal from "@/app/ui/search/filter_modal";
import { FunnelIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FiltersType } from "@/app/lib/types";

interface Props {
  setFilter: (filter: FiltersType) => void;
  filter: FiltersType;
  setSearch: (search: string) => void;
  isDashboard: boolean;
}

const SearchBar = ({ setFilter, filter, setSearch, isDashboard }: Props) => {
  return (
    <>
      <div className={clsx("flex", { "pb-5": !isDashboard })}>
        <label
          className={clsx(
            "input input-bordered flex items-center gap-2 w-36 lg:w-80",
            isDashboard ? "bg-white" : "bg-black-gray"
          )}
        >
          <input
            type="text"
            className={clsx("grow", isDashboard ? "text-black" : "text-white")}
            placeholder="Search Company or Role"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <Modal
          btnClassName="btn btn-ghost ml-2 bg-concrete-gray text-black-gray w-14 xl:w-fit"
          btnContent={
            <>
              <FunnelIcon className="h-6 w-6" /> Filter
            </>
          }
        >
          <FilterModal setFilter={setFilter} filter={filter} />
        </Modal>
      </div>
    </>
  );
};

export default SearchBar;
