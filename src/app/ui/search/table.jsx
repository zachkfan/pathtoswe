import React from 'react'
import Row from "./search_row"

const Table = () => {
  return (
<table className="table table-pin-cols text-center bg-white text-concrete-gray">
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
      <tbody className='text-black'>
        <Row
          company="Google"
          role="Software Engineer Intern"
          location="New York City"
          datePosted="06/29/2024"
          applyLink="https://www.google.com/"
        ></Row>
        <Row
          company="Google"
          role="Software Engineer Intern"
          location="New York City"
          datePosted="06/31/2024"
          applyLink="https://www.google.com/"
        ></Row>
      </tbody>
    </table>  )
}

export default Table;