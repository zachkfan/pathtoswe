import React from "react";
import Row, { statusType } from "./dashboard_row";
import { data } from "./data";
import Card from "./dashboard_card";

interface Props {
  search: string;
  cardView: boolean;
}
const Table = ({ search, cardView }: Props) => {
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
              applicationDashboard={"www.google.com"}
              status={item.status as statusType}
              item_id={item.id}
              key={item.id}
            />
          ))}
      </div>
    );
  } else {
    return (
      <table className="table table-pin-cols text-center">
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
                dateApplied={item.date_applied}
                applicationDashboard={"www.google.com"}
                status={item.status as statusType}
                item_id={item.id}
                key={item.id}
              />
            ))}
        </tbody>
      </table>
    );
  }
};

export default Table;
