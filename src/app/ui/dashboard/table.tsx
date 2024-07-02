import React from "react";
import Row from "./dashboard_row";

const Table = () => {
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
        <Row
          company="Google"
          role="SWE Intern"
          location="NYC"
          datePosted="06/30/2024"
          dateApplied="06/31/2024"
          applicationDashboard="https://www.google.com"
          status="Pending"
        ></Row>
        <Row
          company="Meta"
          role="SWE Intern"
          location="Redmond, Washington"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          applicationDashboard="https://facebook.com"
          status="Closed"
        ></Row>
        <Row
          company="Nvidia"
          role="SWE Intern"
          location="Taiwan"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          applicationDashboard="https://nvidia.com"
          status="Interviewed"
        ></Row>
        <Row
          company="Amazon"
          role="Cloud Engineern Intern"
          location="Chicago, IL"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          applicationDashboard="https://amazon.com"
          status="Hired"
        ></Row>
      </tbody>
    </table>
  );
};

export default Table;
