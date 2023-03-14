// import React and useState hook from React library and import ReactPaginate component and data from JSON file
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Popup from './Popup'
import Search from "../Search"
import './Table.css'
import { Action } from "@remix-run/router";

// declare a default function called PatientTable
export default function PatientTable(props) {

  /**Determines whether or not to open the popup menu
   * for administrative actions
  */

  const [infoPopUp, setInfoPopUp] = useState(props.onTrue);
  const [addPopUp, setAddPopUp] = useState(false);

  // initialize state variables with useState
  const [pageNumber, setPageNumber] = useState(0);

  // set usersPerPage variable to 10, calculate pagesVisited by multiplying the pageNumber and usersPerPage
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // calculate the total number of pages required for pagination based on the length of the data array and usersPerPage
  const [pageCount, setPageCount] = useState(Math.ceil(props.length / usersPerPage));
  //

  // function to set the data
  const [data, setData] = useState(null);
  const [lastID , setLastID]= useState("");

  const [singlePatient, setSinglePatient] = useState(null);

  const [editFormData, setEditFormData] = useState({
    patientId: "placeholder",
    age: "",
    sex: "",
    zipCode: "",
    bmi: "",
    weight: "",
    image: "placeholder",
    examID: "",
    icuAdmit: "",
    icuNum: "",
    mortality: ''
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;


    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  //Fetching the data from the database
  useEffect(() => {
    props.loadData &&
      setData(props.loadData)


  }, []);


  // function to handle changing page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  const Table = ({ action }) => (
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
        </tr>
      </thead>
      <tbody className="adTbody">
        {data && data
          .slice(pagesVisited, pagesVisited + usersPerPage) // slice the data array to get the data for the current page only
          .map((patient) => (
            <TableRow key={patient.patientId} patient={patient} action={action} />
          ))}
      </tbody>
    </table>


  );

  const TableRow = ({ patient, action }) => (
    <tr key={patient.patientId} onClick={action(patient)}>
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
    </tr>

  );

  const handleClick = patient => (e) => {
    // Patient to be update, edit or delete!
    setSinglePatient(patient);
    setInfoPopUp(true);

  }

  function handleSearch(action) {
    if (action != null) {
      setSinglePatient(action)
      setInfoPopUp(true);
    }
  }
  function handleAdd() {
    setAddPopUp(true);
    const temp = data[data.length - 1];
    const patientID = temp.patientId;
    const splitPatientID = patientID.split("-");
    setLastID(splitPatientID[splitPatientID.length-1])
    console.log(lastID)

  }

  // return a div containing the table and ReactPaginate component
  return (
    <div>
      <br />
      <br />
      <Search data={data} onAction={handleSearch} />
      <button className="add-btn" onClick={handleAdd}>Add</button>
      <Table data={data} action={handleClick} />

      <Popup
        trigger={infoPopUp} setTrigger={setInfoPopUp} pop={"info"} singlePatient={singlePatient}
        handleEditFormChange={handleEditFormChange} editFormData={editFormData}
      />
      
      <Popup
        trigger={addPopUp} setTrigger={setAddPopUp} pop={lastID}
      />


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
};