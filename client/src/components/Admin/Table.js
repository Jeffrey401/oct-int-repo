// import React and useState hook from React library and import ReactPaginate component and data from JSON file
import React, { useState, useEffect, Fragment } from "react";
import ReactPaginate from "react-paginate";
import './Table.css';
import RowMutator from "./RowMutator";
// declare a default function called PatientTable
export default function PatientTable() {

  // initialize state variables with useState
  const [pageNumber, setPageNumber] = useState(0);

  // set usersPerPage variable to 10, calculate pagesVisited by multiplying the pageNumber and usersPerPage
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // calculate the total number of pages required for pagination based on the length of the data array and usersPerPage
  const [pageCount, setPageCount] = useState(null);
  //

  // function to set the data
  const [data, setData] = useState(null);

  //Fetching the data from the database
  useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        setData(data)
        setPageCount(Math.ceil(data.length / usersPerPage))
      })
      .catch(error => console.error(error));
  }, []);

  // function to handle changing page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [updatePatient, setUpdateId] = useState(null);

  // function for updating patient data
  const [updateData, setUpdateData] = useState({
    age: "",
    sex: "",
    zipCode: "",
    bmi: "",
    weight: "",
    examID: "",
    icuAdmit: "",
    icuNum: "",
    mortality: "",
  });

  const [addData, setAddData] = useState({
    age: "",
    sex: "",
    zipCode: "",
    bmi: "",
    weight: "",
    examID: "",
    icuAdmit: "",
    icuNum: "",
    mortality: "",
  });

  const handleEditClick = (event, patient) => {
    event.preventDefault();
    setUpdateId(patient.patientId);

    const formValues = {
      age: patient.age,
      sex: patient.sex,
      zipCode: patient.zipCode,
      bmi: patient.bmi,
      weight: patient.weight,
      examID: patient.examID,
      icuAdmit: patient.icuAdmit,
      icuNum: patient.icuNum,
      mortality: patient.mortality,
    };

    setUpdateData(formValues);
  };

  const handleCancelClick = () => {
    setUpdateId(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newPatientData = { ...updateData }
    newPatientData[fieldName] = fieldValue;

    setUpdateData(newPatientData);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPatient = {
      age: updateData.age,
      sex: updateData.sex,
      zipCode: updateData.zipCode,
      bmi: updateData.bmi,
      weight: updateData.weight,
      examID: updateData.examID,
      icuAdmit: updateData.icuAdmit,
      icuNum: updateData.icuNum,
      mortality: updateData.mortality,
    }

    const newPatientData = [...data];

    const index = data.findIndex((patient)=> patient.patientId === updatePatient);

    newPatientData[index] = editedPatient;

    setData(newPatientData);
    setUpdateId(null);
  }


  const Table = ({ action }) => (
    <form onSubmit={handleEditFormSubmit}>
      <table className="table text-center" >
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Zipcode</th>
            <th>BMI</th>
            <th>Weight</th>
            <th>ExamID</th>
            <th>ICU Admit</th>
            <th>ICU Num</th>
            <th>Mortality</th>
            <th>Administrative Actions</th>
          </tr>
        </thead>
        <tbody className="adTbody">
          {data && data
            .slice(pagesVisited, pagesVisited + usersPerPage) // slice the data array to get the data for the current page only
            .map((patient) => (
              <Fragment>
                {updatePatient === patient.patientId ? (
                  <RowMutator
                    updateData={updateData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <TableRow
                    key={patient.patientId}
                    patient={patient}
                    action={action}
                    handleEditClick={handleEditClick} />
                )}
              </Fragment>
            ))}
        </tbody>
      </table>
    </form>


  );

  const TableRow = ({ patient, action, handleEditClick }) => (
    <tr key={patient.patientId} onClick={action(patient.patientId)} >
      <th scope="row" >{patient.patientId}</th>
      <td >{patient.age}</td>
      <td>{patient.sex}</td>
      <td>{patient.zipCode}</td>
      <td>{patient.bmi}</td>
      <td>{patient.weight}</td>
      <td>{patient.examID}</td>
      <td>{patient.icuAdmit}</td>
      <td>{patient.icuNum}</td>
      <td>{patient.mortality}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, patient)}
        >
          Update
        </button>
      </td>
    </tr>

  );

  const handleClick = patient => (e) => {

    // Patient to be update, edit or delete!
    console.log("Value of patient is " + patient);


  }

  // return a div containing the table and ReactPaginate component
  return (
    <div>

      <Table data={data} action={handleClick} />

      {/* Render the ReactPaginate component */}
      <ReactPaginate
        previousLabel={"< Prev"} // Set previous page button label
        nextLabel={"Next >"} // Set next page button label
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
