import React, { useState } from 'react';
import {Link} from "react-router-dom"
// import Details from './Details';
import data from '../converted-data.json'
import '../styles/table.css'
function Table() {
    const [patient, setPatient] = useState([
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
    ]);
    return (
        <div>
            <div className="container center">
            <br />

                <h3 className="p-3 text-center">List of patients</h3>
                <div className="scroll">
                    {
                        data.map(patient =>
                            <div className="dataBox" key={patient.patientId}>
                                {/* <a href='/details'>
                                    <button className="button-solid">{patient.patientId + "\t" + patient.sex + "\t" + patient.age} </button>
                                </a> */}
                                <Link to={"/details/" + patient.patientId}>
                                    <button className="button-solid">{patient.patientId + "\t" + patient.sex + "\t" + patient.age} </button>
                                </Link>
                            </div>)
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Table;