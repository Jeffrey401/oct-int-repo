import React from "react";

const RowReader = ({ patient, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{patient.age}</td>
            <td>{patient.sex}</td>
            <td>{patient.zipCode}</td>
            <td>{patient.bmi}</td>
            <td>{patient.weight}</td>
            <td>{patient.examID}</td>
            <td>{patient.icuAdmit}</td>
            <td>{patient.icuNum}</td>
            <td>{patient.mortality}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, patient)}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default RowReader;