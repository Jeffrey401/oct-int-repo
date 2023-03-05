import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.patientId}</td>
   <td>{props.record.age}</td>
   <td>{props.record.sex}</td>
   <td>{props.record.zipCode}</td>
   <td>{props.record.bmi}</td>
   <td>{props.record.weight}</td>
   <td>{props.record.image}</td>
   <td>{props.record.examID}</td>
   <td>{props.record.icuAdmit}</td>
   <td>{props.record.icuNum}</td>
   <td>{props.record.mortality}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database
 useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:9000/exams/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
    }
  
    getRecords();
  
    return;
  }, [records.length]);
  
  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:9000/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

 // This method will map out the records on the table
 function ExamList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
          <th>Patient Id</th>
           <th>Age</th>
           <th>Sex</th>
           <th>Zip Code</th>
           <th>BMI</th>
           <th>Weight</th>
           <th>Image</th>
           <th>exam ID</th>
           <th>ICU Admittance Status</th>
           <th>Number Of ICU Visits</th>
           <th>Mortality</th>
         </tr>
       </thead>
       <tbody>{ExamList()}</tbody>
     </table>
   </div>
 );
}