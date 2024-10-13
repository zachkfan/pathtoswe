import React from "react";
import Row from "./search_row";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";
import useSWR from "swr";
import { TableResponseType, FiltersType } from "@/app/lib/types";

export interface Props {
  search: string;
  filter: FiltersType;
  tab: "Search" | "Hidden" | "Saved";
  showToast: (message: string, type: "success" | "error") => void;
}

const Table = ({ search, filter, tab, showToast }: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const fetchWithTab = ({
    url,
    tab,
  }: {
    url: string;
    tab: "Search" | "Hidden" | "Saved";
  }) => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tab: tab }),
    }).then((res) => res.json());
  };

  const { data, error } = useSWR<TableResponseType, Error>(
    { url: "/api/search", tab: tab },
    fetchWithTab,
    {
      revalidateOnFocus: false, // Disables revalidation when the window gains focus
      refreshInterval: 0, // Disables automatic revalidation
    }
  );

  const internships = data?.internships;
  const message = data?.message;
  if (message) {
    return <div className="text-lg p-52">Not Logged In</div>;
  }
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (error)
    return (
      <div className="flex justify-center text-lg p-52">Failed to load</div>
    );
  if (!internships)
    return (
      <div className="flex gap-2 justify-center text-lg p-52">
        Loading<span className="loading loading-spinner loading-sm"></span>
      </div>
    );

  if (internships.length === 0) {
    return <div className="text-lg p-52">No {tab} Yet</div>;
  }

  const filteredInternships = internships
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.company.toLowerCase().includes(search.toLowerCase()) ||
            item.role.toLowerCase().includes(search.toLowerCase());
    })
    .filter((item) => {
      if (filter.locations.length === 0) return item;
      return filter.locations.some((activeLocationFilter) => {
        return item.location
          .toLowerCase()
          .includes(activeLocationFilter.toLowerCase());
      });
    })
    .filter((item) => {
      if (filter.roles.length === 0) return item;
      return filter.roles.some((activeRoleFilter) => {
        return item.role.toLowerCase().includes(activeRoleFilter.toLowerCase());
      });
    });

  const paginatedInternships =
    rowsPerPage > 0
      ? filteredInternships.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : filteredInternships;

  return (
    <>
      {filteredInternships.length === 0 ? (
        <div className="text-lg p-52">No results found</div>
      ) : (
        <table className="table table-pin-cols text-center bg-white text-concrete-gray lg:table-md table-xs">
          <thead>
            <tr className="text-sm [&_*]:bg-black-gray text-white">
              <th className="w-[20%]">Company</th>
              <th className="w-[35%]">Role</th>
              <th className="w-[15%]">Location</th>
              <th className="pr-0 w-[10%]">Date Posted</th>
              <th className="w-[10%]"></th>
              <th className="pl-0 w-[10%]">Apply Link</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {paginatedInternships.map((item) => (
              <Row
                company={item.company}
                role={item.role}
                location={item.location}
                datePosted={item.date_posted}
                applyLink={item.apply_link}
                item_id={item.id}
                key={item.id}
                currentTab={tab}
                showToast={showToast}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                className="text-black text-sm"
                rowsPerPageOptions={[10, 15, 25, 100]}
                colSpan={7}
                count={filteredInternships.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                    slots: {
                      firstPageIcon: FirstPageRoundedIcon,
                      lastPageIcon: LastPageRoundedIcon,
                      nextPageIcon: ChevronRightRoundedIcon,
                      backPageIcon: ChevronLeftRoundedIcon,
                    },
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      )}{" "}
    </>
  );
};

export default Table;
