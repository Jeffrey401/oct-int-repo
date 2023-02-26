// import React and useState hook from React library and import ReactPaginate component and data from JSON file
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import data from "../converted-data.json";

// declare a default function called PatientTable
export default function PatientTable() {

  // initialize state variables with useState
  const [pageNumber, setPageNumber] = useState(0);

  // set usersPerPage variable to 10, calculate pagesVisited by multiplying the pageNumber and usersPerPage
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // calculate the total number of pages required for pagination based on the length of the data array and usersPerPage
  const pageCount = Math.ceil(data.length / usersPerPage);

  // function to handle changing page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // return a div containing the table and ReactPaginate component
  return (
    <div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>ZIP Code</th>
            <th>BMI</th>
            <th>Weight</th>
            <th>Exam ID</th>
            <th>ICU Admit</th>
            <th>ICU Num</th>
            <th>Mortality</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice(pagesVisited, pagesVisited + usersPerPage) // slice the data array to get the data for the current page only
            .map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.patientId}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.zipCode}</td>
                <td>{patient.bmi}</td>
                <td>{patient.weight}</td>
                <td>{patient.examID}</td>
                <td>{patient.icuAdmit}</td>
                <td>{patient.icuNum}</td>
                <td>{patient.mortality}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Render the ReactPaginate component */}
      <ReactPaginate
        previousLabel={"Prev"} // Set previous page button label
        nextLabel={"Next"} // Set next page button label
        pageCount={pageCount} // Set the total number of pages required for pagination
        onPageChange={changePage} // Callback function when page number is clicked
        containerClassName={"pagination-container"} // CSS class for the pagination container
        previousLinkClassName={"previous-page"} // CSS class for previous page button
        nextLinkClassName={"next-page"} // CSS class for next page button
        disabledClassName={"pagination-disabled"} // CSS class for disabled page number button
        activeClassName={"pagination-active"} // CSS class for active page number button
      />
    </div>
  );
}
