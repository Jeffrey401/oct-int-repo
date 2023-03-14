import React, { useState } from 'react'

export default function Popup(props) {



    const [editFormData, setEditFormData] = useState({
        patientId: "",
        age: "",
        sex: "",
        zipCode: "",
        bmi: "",
        weight: "",
        image: "",
        examID: "",
        icuAdmit: "",
        icuNum: "",
        mortality: ''
    });

    const handleDeleteClick = () => {
        // const newData = data.filter(patient => patient.patientId !== singlePatient);
        fetch('http://localhost:9000/exams/' + props.singlePatient._id, {
            method: 'DELETE',
            header: 'Access-Control-Allow-Origin'
        })
            .then(() => {
                window.location.reload(false)
            })
            .catch(err => console.log(err));

        props.setButtonPopup(false);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;


        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    //Adds input data to database with the API as a json form
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:9000/exams/' + props.singlePatient._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                patientId: (editFormData.patientId !== "" ? editFormData.patientId : props.singlePatient.patientId),
                age: (editFormData.age !== "" ? editFormData.age : props.singlePatient.age),
                sex: (editFormData.sex !== "" ? editFormData.sex : props.singlePatient.sex),
                zipCode: (editFormData.zipCode !== "" ? editFormData.zipCode : props.singlePatient.zipCode),
                bmi: (editFormData.bmi !== "" ? editFormData.bmi : props.singlePatient.bmi),
                weight: (editFormData.weight !== "" ? editFormData.weight : props.singlePatient.weight),
                image: (editFormData.image !== "" ? editFormData.image : props.singlePatient.image),
                examID: (editFormData.examID !== "" ? editFormData.examID : props.singlePatient.examID),
                icuAdmit: (editFormData.icuAdmit !== "" ? editFormData.icuAdmit : props.singlePatient.icuAdmit),
                icuNum: (editFormData.icuNum !== "" ? editFormData.icuNum : props.singlePatient.icuNum),
                mortality: (editFormData.mortality !== "" ? editFormData.mortality : props.singlePatient.mortality)
            })
        })
            .then(res => window.location.reload(false))
            .catch(err => console.log(err));
    }



    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>
                    Close</button>
                <h1>Administrative Actions</h1>
                <form onSubmit={handleEditFormSubmit}>
                    <input
                        type="text"
                        name="patientId"
                        defaultValue={props.singlePatient.patientId}
                        placeholder="Patient ID"
                        onChange={handleEditFormChange}
                    ></input>
                    <input
                        type="number"
                        name="age"
                        defaultValue={props.singlePatient.age}
                        placeholder="Age"
                        onChange={handleEditFormChange}
                    ></input>
                    <input
                        type="text"
                        name="sex"
                        defaultValue={props.singlePatient.sex}
                        placeholder="Sex"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="text"
                        name="zipCode"
                        defaultValue={props.singlePatient.zipCode}
                        placeholder="Zip Code"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="number"
                        name="bmi"
                        defaultValue={props.singlePatient.bmi}
                        placeholder="BMI"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="number"
                        name="weight"
                        defaultValue={props.singlePatient.weight}
                        placeholder="Weight"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="text"
                        name="examID"
                        defaultValue={props.singlePatient.examID}
                        placeholder="Exam ID"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="text"
                        name="icuAdmit"
                        defaultValue={props.singlePatient.icuAdmit}
                        placeholder="ICU Admittance"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="number"
                        name="icuNum"
                        defaultValue={props.singlePatient.icuNum}
                        placeholder="Number of ICU Visits"
                        onChange={handleEditFormChange}
                    ></input>

                    <input
                        type="text"
                        name="mortality"
                        defaultValue={props.singlePatient.mortality}
                        placeholder="Mortality"
                        onChange={handleEditFormChange}
                    ></input>
                    <button type="submit">Update Patient Data</button>
                </form>
                <button className='delete-btn' onClick={handleDeleteClick}>
                    Delete Patient
                </button>
            </div>
        </div >
    ) : "";
}
