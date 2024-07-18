import React from "react";
import Row from "./search_row";
// import { data } from "./data";
import { InternshipsType } from "@/app/lib/types";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CustomTablePagination from "@/app/ui/table_pagination";
import useSWR from "swr";

// const getInternships = async (): Promise<InternshipsType[] | string> => {
//   try {
//     const res = await fetch("/api/search/", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to Fetch Topics");
//     }
//     return (await res.json()) as InternshipsType[];
//   } catch (error) {
//     return "Something went wrong";
//   }
// };

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const Table = ({ search }: { search: string }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, error } = useSWR<{ internships: InternshipsType[] }, Error>(
    "/api/search",
    fetcher,
    {
      revalidateOnFocus: false, // Disables revalidation when the window gains focus
      refreshInterval: 0, // Disables automatic revalidation
    }
  );
  const internships = data?.internships;
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

  // const data = await getInternships();
  // if (typeof data === "string") {
  //   console.log(data);
  // } else {
  if (error) return <div className="text-lg">Failed to load</div>;
  if (!internships)
    return (
      <div className="flex gap-2 justify-center text-lg">
        Loading<span className="loading loading-spinner loading-sm"></span>
      </div>
    );

  return (
    <table className="table table-pin-cols text-center bg-white text-concrete-gray lg:table-md table-xs">
      <thead>
        <tr className="text-sm [&_*]:bg-black-gray text-white">
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th className="pr-0">Date Posted</th>
          <th></th>
          <th className="pl-0">Apply Link</th>
        </tr>
      </thead>
      <tbody className="text-black">
        {(rowsPerPage > 0 && search == ""
          ? internships.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          : internships
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
  );
};

export default Table;
