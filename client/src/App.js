import React, { useState } from "react";
import './App.css';
import data from "./converted-data.json"

import { useApi } from './hooks/use-api';
import ProfileInfo from "./profile/profile-info";

function App() {
  const { response } = useApi();

  const [patientData, setData] = useState(data);

  return (
    <div className="App">
      {/* <table>
        <thead className="App-header">
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Zip Code</th>
            <th>BMI</th>
            <th>Weight</th>
            <th>Image</th>
            <th>Exam ID</th>
            <th>ICU Admittance</th>
            <th>Number of ICU Admits</th>
            <th>Mortality</th>
          </tr>
        </thead>
        <tbody> 
          {patientData.map((patient) => (
          <tr>
            <td>{patientData.patientId}</td>
            <td>{patientData.age}</td>
            <td>{patientData.sex}</td>
            <td>{patientData.zipCode}</td>
            <td>{patientData.bmi}</td>
            <td>{patientData.weight}</td>
            <td>{patientData.image}</td>
            <td>{patientData.examId}</td>
            <td>{patientData.icuAdmit}</td>
            <td>{patientData.icuNum}</td>
            <td>{patientData.mortality}</td>
          </tr>
          ))}
        </tbody>
      </table> */}

      <ProfileInfo/>
    </div>
  );
}

export default App;