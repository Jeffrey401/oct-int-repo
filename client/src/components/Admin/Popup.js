import React from 'react'
import patient from './Table'
import handleDeleteClick from './Table'

export default function Popup (props, data) {
    console.log(data);
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>
                    Close</button>
                <h1>Administrative Actions</h1>
                <form>

                    <input
                        type="number"
                        name="age"
                        required="required"
                        placeholder="Age..."

                    />
                    <input
                        type="text"
                        name="sex"
                        required="required"
                        placeholder="Sex..."

                    />

                    <input
                        type="text"
                        name="zipCode"
                        required="required"
                        placeholder="Zip Code..."

                    />

                    <input
                        type="number"
                        name="bmi"
                        required="required"
                        placeholder="BMI..."

                    />

                    <input
                        type="number"
                        name="weight"
                        required="required"
                        placeholder="Weight"

                    />

                    <input
                        type="text"
                        name="examID"
                        required="required"
                        placeholder="Exam ID...."

                    />

                    <input
                        type="text"
                        name="icuAdmit"
                        required="required"
                        placeholder="ICU Admittance..."

                    />

                    <input
                        type="number"
                        name="icuNum"
                        required="required"
                        placeholder="ICU Number..."

                    />

                    <input
                        type="text"
                        name="mortality"
                        required="required"
                        placeholder="Mortality..."

                    />
                    <button type="submit">Update Patient Data</button>
                    <button type="button" onClick={() => handleDeleteClick(patient.patientId)}>Delete This Patient</button>
                </form>
            </div>

        </div>
    ) : "";
}
