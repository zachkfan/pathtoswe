import React from "react";
import Row, { statusType } from "./dashboard_row";
import Card from "./dashboard_card";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";
import { JoinTableType } from "@/app/lib/types";
import useSWR from "swr";

interface Props {
  search: string;
  cardView: boolean;
  tab: "All" | "Pending" | "Closed" | "Hired" | "Interviewed";
}

const Table = ({ search, cardView, tab }: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const fetchDashboardData = ({
    url,
    tab,
  }: {
    url: string;
    tab: "All" | "Pending" | "Closed" | "Hired" | "Interviewed";
  }) => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tab: tab }),
    }).then((res) => res.json());
  };

  const { data, error } = useSWR<JoinTableType[], Error>(
    { url: "/api/dashboard", tab: tab },
    fetchDashboardData,
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

  const appliedInternships = data;

  if (!appliedInternships.length) {
    return (
      <div className="flex justify-center text-lg p-44">
        No applications yet!
      </div>
    );
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

  if (cardView) {
    return (
      <div className="flex flex-row flex-wrap justify-between lg:px-0 xl:px-8">
        {appliedInternships
          .filter((item) => {
            return search.toLowerCase() == ""
              ? item
              : item.internships?.company
                  .toLowerCase()
                  .includes(search.toLowerCase());
          })
          .map(
            (item) =>
              item.internships && (
                <Card
                  company={item.internships.company}
                  role={item.internships.role}
                  location={item.internships.location}
                  datePosted={item.internships.date_posted}
                  dateApplied={item.date_applied}
                  applicationDashboard={"https://www.google.com"}
                  status={item.status as statusType}
                  item_id={item.internships.id}
                  key={item.internships.id}
                />
              )
          )}
      </div>
    );
  } else {
    return (
      <table className="table table-pin-cols text-center lg:table-md table-xs">
        <thead>
          <tr className="text-sm text-gray-400 [&_*]:bg-white">
            <th className="w-[20%]">Company</th>
            <th className="w-[25%]">Role</th>
            <th className="w-[15%]">Location</th>
            <th className="w-[15%]">Date Posted</th>
            <th className="w-[15%]">Date Applied</th>
            <th className="w-[10%]">Status</th>
          </tr>
        </thead>
        <tbody className="text-black font-semibold">
          {(rowsPerPage > 0
            ? appliedInternships.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : appliedInternships
          )
            .filter((item) => {
              return search.toLowerCase() == ""
                ? item
                : item.internships?.company
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            .map(
              (item) =>
                item.internships && (
                  <Row
                    company={item.internships.company}
                    role={item.internships.role}
                    location={item.internships.location}
                    datePosted={item.internships.date_posted}
                    dateApplied={item.date_applied}
                    applicationDashboard={"https://www.google.com"}
                    status={item.status as statusType}
                    item_id={item.internships.id}
                    key={item.internships.id}
                  />
                )
            )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              className="text-black text-xs lg:text-sm"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={7}
              count={appliedInternships.length}
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
    );
  }
};

export default Table;
