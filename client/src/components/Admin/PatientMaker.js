import React, { useState, useEffect } from "react";
import data from './Table'

//TODO: make handleAddFormSubmit post to the database

export default function PatientMaker() {

    const [patients, setPatients] = useState(data);

    const [addFormData, setAddFormData] = useState({
        age: "",
        sex: "",
        zipCode:"",
        bmi: "",
        weight: "",
        examID:"",
        icuAdmit:"",
        icuNum:"",
        mortality:''
    });

    return (
        <div>
            <h1>Add a Patient</h1>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="age"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="sex"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="zipCode"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="bmi"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="weight"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="examID"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="icuAdmit"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="icuNum"
                    required="required"
                    placeholder=""
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name=""
                    required="required"
                    placeholder="mortality"
                    onChange={handleAddFormChange}
                />

                <button type="submit">Add Patient</button>
            </form>
        </div >
    );
};