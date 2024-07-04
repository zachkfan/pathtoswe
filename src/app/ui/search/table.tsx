"use client";

import React from "react";
import Row from "./search_row";
import { data } from "./data";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";

const Table = ({ search }: { search: string }) => {
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

  return (
    <table className="table table-pin-cols text-center bg-white text-concrete-gray lg:table-md table-xs">
      <thead>
        <tr className="[&_*]:bg-black-gray text-white">
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th className="pr-0">Date Posted</th>
          <th></th>
          <th className="pl-0">Apply Link</th>
        </tr>
      </thead>
      <tbody className="text-black">
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
              applyLink={item.apply_link}
              item_id={item.id}
              key={item.id}
            />
          ))}
      </tbody>
      <tfoot>
        <tr>
          <CustomTablePagination
            className="text-black text-sm"
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
};

export default Table;
