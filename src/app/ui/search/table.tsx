import React from "react";
import Row from "./search_row";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";
import useSWR from "swr";
import { TableResponseType } from "@/app/lib/types";

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

const Table = ({
  search,
  tab,
}: {
  search: string;
  tab: "Search" | "Hidden" | "Saved";
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  if (error) return <div className="text-lg p-52">Failed to load</div>;
  if (!internships)
    return (
      <div className="flex gap-2 justify-center text-lg p-52">
        Loading<span className="loading loading-spinner loading-sm"></span>
      </div>
    );

  if (internships.length === 0) {
    return <div className="text-lg p-52">No {tab} Yet</div>;
  }

  const filteredInternships = (
    rowsPerPage > 0 && search == ""
      ? internships.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : internships
  ).filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.company.toLowerCase().includes(search.toLowerCase()) ||
          item.role.toLowerCase().includes(search.toLowerCase());
  });

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
            {filteredInternships.map((item) => (
              <Row
                company={item.company}
                role={item.role}
                location={item.location}
                datePosted={item.date_posted}
                applyLink={item.apply_link}
                item_id={item.id}
                key={item.id}
                currentTab={tab}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                className="text-black text-sm"
                rowsPerPageOptions={[10, 15, 25, { label: "All", value: -1 }]}
                colSpan={7}
                count={internships.length}
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
