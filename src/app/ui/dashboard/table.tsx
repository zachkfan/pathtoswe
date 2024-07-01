import React from "react";
import Row from "./dashboard_row";

const table = () => {
  return (
    <table className="table table-pin-cols text-center bg-white text-concrete-gray">
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th>Date Posted</th>
          <th>Date Applied</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="text-black">
        <Row
          company="Google"
          role="SWE Intern"
          location="NYC"
          datePosted="06/30/2024"
          dateApplied="06/31/2024"
          status="Pending"
        ></Row>
        <Row
          company="Meta"
          role="SWE Intern"
          location="Redmond, Washington"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          status="Closed"
        ></Row>
        <Row
          company="Nvidia"
          role="SWE Intern"
          location="Taiwan"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          status="Interviewed"
        ></Row>
        <Row
          company="Amazon"
          role="Cloud Engineern Intern"
          location="Chicago, IL"
          datePosted="06/32/2024"
          dateApplied="07/19/2024"
          status="Hired"
        ></Row>
      </tbody>
    </table>
  );
};

export default table;
