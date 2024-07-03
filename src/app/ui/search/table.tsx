import React from "react";
import Row from "./search_row";
import { data } from "./data";

const Table = ({ search }: { search: string }) => {
  return (
    <table className="table table-pin-cols text-center bg-white text-concrete-gray">
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
        {data
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
    </table>
  );
};

export default Table;
