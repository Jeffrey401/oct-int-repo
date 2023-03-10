import React, { useState } from "react";

//function for adding new patients to the database
export default function PatientMaker() {

    /**creating a variable and mutator to hold the new
     * patient's data
     */
    const [addFormData, setAddFormData] = useState({
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

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }


    //Adds input data to database with the API as a json form
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/exams/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                patientId: addFormData.patientId,
                age: addFormData.age,
                sex: addFormData.sex,
                zipCode: addFormData.zipCode,
                bmi: addFormData.bmi,
                weight: addFormData.weight,
                image: addFormData.image,
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

    //returns a table of input fields to enter new patient's data
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