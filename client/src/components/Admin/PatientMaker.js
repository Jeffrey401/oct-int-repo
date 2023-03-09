import React, { useState, useEffect } from "react";

//TODO: make handleAddFormSubmit post to the database



export default function PatientMaker() {

    const [addFormData, setAddFormData] = useState({
        patientId: "",
        age: "",
        sex: "",
        zipCode: "",
        bmi: "",
        weight: "",
        examID: "",
        icuAdmit: "",
        icuNum: "",
        mortality: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }


    //Adds data to database with the API
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/exams/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: addFormData.patientId,
                age: addFormData.age,
                sex: addFormData.sex,
                zipCode: addFormData.zipCode,
                bmi: addFormData.bmi,
                weight: addFormData.weight,
                examID: addFormData.examID,
                icuAdmit: addFormData.icuAdmit,
                icuNum: addFormData.icuNum,
                mortality: addFormData.mortality
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1>Add a Patient</h1>
            <form onSubmit={handleAddFormSubmit}>

                <input
                    type="number"
                    name="age"
                    required="required"
                    placeholder="Age..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="sex"
                    required="required"
                    placeholder="Sex..."
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="zipCode"
                    required="required"
                    placeholder="Zip Code..."
                    onChange={handleAddFormChange}
                />

                <input
                    type="number"
                    name="bmi"
                    required="required"
                    placeholder="BMI..."
                    onChange={handleAddFormChange}
                />

                <input
                    type="number"
                    name="weight"
                    required="required"
                    placeholder="Weight"
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="examID"
                    required="required"
                    placeholder="Exam ID...."
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="icuAdmit"
                    required="required"
                    placeholder="ICU Admittance..."
                    onChange={handleAddFormChange}
                />

                <input
                    type="number"
                    name="icuNum"
                    required="required"
                    placeholder="ICU Number..."
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="mortality"
                    required="required"
                    placeholder="Mortality..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add Patient</button>
            </form>
        </div >
    );
};