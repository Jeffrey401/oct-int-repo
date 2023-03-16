import React, { useRef, useState, useEffect } from 'react'
import PatientMaker from './PatientMaker';
import './Popup.css'
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
        const confirmed = window.confirm("Are you sure you want to delete this Patient?");
        if(confirmed){
        // const newData = data.filter(patient => patient.patientId !== singlePatient);
        fetch('https://server-octintmedical.onrender.com/exams/' + props.singlePatient._id, {
            method: 'DELETE',
            header: 'Access-Control-Allow-Origin'
        })
            .then(() => window.location.reload(false))
            .catch(err => console.log(err));

        props.setTrigger(false);
    }
    
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
        fetch('https://server-octintmedical.onrender.com/exams/' + props.singlePatient._id, {
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


        (props.pop === "info") ? (

            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                    <h1>Administrative Actions</h1>
                    <form className="form" onSubmit={handleEditFormSubmit}>
                        <div className='form-group'>
                            <label>PatientID</label>
                            <input
                                type="text"
                                name="patientId"
                                title="PatientID"
                                defaultValue={props.singlePatient.patientId}
                                placeholder="Patient ID"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                title="Age"
                                defaultValue={props.singlePatient.age}
                                placeholder="Age"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>Sex</label>
                            <input
                                type="text"
                                name="sex"
                                defaultValue={props.singlePatient.sex}
                                placeholder="Sex"
                                
                                onChange={handleEditFormChange}
                                required>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>ZipCode</label>
                            <input
                                type="text"
                                name="zipCode"
                                defaultValue={props.singlePatient.zipCode}
                                placeholder="Zip Code"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>BMI</label>
                            <input
                                type="number"
                                name="bmi"
                                defaultValue={props.singlePatient.bmi}
                                placeholder="BMI"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>Weight</label>
                            <input
                                type="number"
                                name="weight"
                                defaultValue={props.singlePatient.weight}
                                placeholder="Weight"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>Exam ID</label>
                            <input
                                type="text"
                                name="examID"
                                defaultValue={props.singlePatient.examID}
                                placeholder="Exam ID"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>ICUAdmit</label>
                            <input
                                type="text"
                                name="icuAdmit"
                                defaultValue={props.singlePatient.icuAdmit}
                                placeholder="ICU Admittance"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>ICUNum</label>
                            <input
                                type="number"
                                name="icuNum"
                                defaultValue={props.singlePatient.icuNum}
                                placeholder="Number of ICU Visits"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>

                        <div className='form-group'>
                            <label>Mortality</label>
                            <input
                                type="text"
                                name="mortality"
                                defaultValue={props.singlePatient.mortality}
                                placeholder="Mortality"
                                onChange={handleEditFormChange}>
                            </input>
                        </div>
                        <br />
                        <div className="btn-group">
                            <button className="update-btn" type="submit">Update</button>
                            <button className='delete-btn' onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </form>

                </div>
            </div >

        ) : <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                <PatientMaker lastID={props.pop}/>
            </div>
        </div>) : "";

}
