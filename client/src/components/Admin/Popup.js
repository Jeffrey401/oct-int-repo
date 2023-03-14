import React, { useState } from 'react'

export default function Popup(props) {



    const handleDeleteClick = () => {


        
        // const newData = data.filter(patient => patient.patientId !== singlePatient);
         fetch('http://localhost:9000/exams/' + props.singlePatient._id, {
           method: 'DELETE',
           header: 'Access-Control-Allow-Origin'
         })
           .then(() => {
            console.log(props.singlePatient._id)
            window.location.reload(false)}) // Need a redirection to admin. to refresh the page!
           .catch(err => console.log(err));
     
         // setData(newData);
     
     
         console.log(props.singlePatient._id);
     
         props.setButtonPopup(false);
       };



    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>
                    Close</button>
                <h1>Administrative Actions</h1>
                <form onSubmit={props.handleEditFormSubmit}>

                    <input
                        type="number"
                        name="age"
                        value={props.editFormData.age}
                        required="required"
                        placeholder={props.singlePatient.age}
                        onChange={props.handleEditFormChange}                    
                    />
                    <input
                        type="text"
                        name="sex"
                        value={props.editFormData.sex}
                        required="required"
                        placeholder={props.singlePatient.sex}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="text"
                        name="zipCode"
                        value={props.editFormData.zipCode}
                        required="required"
                        placeholder={props.singlePatient.zipCode}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="number"
                        name="bmi"
                        value={props.editFormData.bmi}
                        required="required"
                        placeholder={props.singlePatient.bmi}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="number"
                        name="weight"
                        value={props.editFormData.weight}
                        required="required"
                        placeholder={props.singlePatient.weight}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="text"
                        name="examID"
                        value={props.editFormData.examID}
                        required="required"
                        placeholder={props.singlePatient.examID}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="text"
                        name="icuAdmit"
                        value={props.editFormData.icuAdmit}
                        required="required"
                        placeholder={props.singlePatient.icuAdmit}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="number"
                        name="icuNum"
                        value={props.editFormData.icuNum}
                        required="required"
                        placeholder={props.singlePatient.icuNum}
                        onChange={props.handleEditFormChange}  
                    />

                    <input
                        type="text"
                        name="mortality"
                        value={props.editFormData.mortality}
                        required="required"
                        placeholder={props.singlePatient.mortality}
                        onChange={props.handleEditFormChange}  
                    />
                    <button type="submit">Update Patient Data</button>
                </form>
                <button className='delete-btn' onClick={handleDeleteClick}>
                    Delete Patient
                </button>
            </div>

        </div >
    ) : "";
}
