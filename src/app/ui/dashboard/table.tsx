"use client";

import React from "react";
import Row, { statusType } from "./dashboard_row";
import { data } from "./data";
import Card from "./dashboard_card";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";

interface Props {
  search: string;
  cardView: boolean;
}
const Table = ({ search, cardView }: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      <div className="flex flex-row flex-wrap justify-evenly">
        {data
          .filter((item) => {
            return search.toLowerCase() == ""
              ? item
              : item.company.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <Card
              company={item.company}
              role={item.role}
              location={item.location}
              datePosted={item.date_posted}
              dateApplied={item.date_applied}
              applicationDashboard={"https://www.google.com"}
              status={item.status as statusType}
              item_id={item.id}
              key={item.id}
            />
          ))}
      </div>
    );
  } else {
    return (
      <table className="table table-pin-cols text-center lg:table-md table-xs">
        <thead>
          <tr className="text-sm text-gray-400 [&_*]:bg-white">
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Date Posted</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-black font-semibold">
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          )
            .filter((item) => {
              return search.toLowerCase() == ""
                ? item
                : item.company.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <Row
                company={item.company}
                role={item.role}
                location={item.location}
                datePosted={item.date_posted}
                dateApplied={item.date_applied}
                applicationDashboard={"https://www.google.com"}
                status={item.status as statusType}
                item_id={item.id}
                key={item.id}
              />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              className="text-black text-xs lg:text-sm"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={7}
              count={20} //TODO: switch with numbers of actual data
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
