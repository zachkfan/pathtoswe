import React from "react";
import Row from "@/app/ui/search/search_row";

export default function Page() {
  return (
    <table className="table table-pin-cols table-zebra text-center">
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th className="pr-0">Date Posted</th>
          <th></th>
          <th className="pl-0">Apply Link</th>
        </tr>
      </thead>
      <tbody>
        <Row
          company="Google"
          role="Software Engineer Intern"
          location="New York City"
          date_posted="06/29/2024"
          apply_link="https://www.google.com/"
        ></Row>
        <Row
          company="Google"
          role="Software Engineer Intern"
          location="New York City"
          date_posted="06/29/2024"
          apply_link="https://www.google.com/"
        ></Row>
      </tbody>
    </table>
  );
}
