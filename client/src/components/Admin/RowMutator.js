import React from "react";
const RowMutator = ({
    updateData,
    handleEditFormChange,
    handleCancelClick
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="age"
                    value={updateData.age}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="sex"
                    value={updateData.sex}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="zipCode"
                    value={updateData.zipCode}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="bmi"
                    value={updateData.bmi}
                    onChange={handleEditFormChange}
                ></input>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="weight"
                    value={updateData.weight}
                    onChange={handleEditFormChange}
                ></input>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="examID"
                    value={updateData.examID}
                    onChange={handleEditFormChange}
                ></input>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="icuAdmit"
                    value={updateData.icuAdmit}
                    onChange={handleEditFormChange}
                ></input>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="icuNum"
                    value={updateData.icuNum}
                    onChange={handleEditFormChange}
                ></input>
                <input
                    type="text"
                    required="required"
                    placeholder=""
                    name="mortality"
                    value={updateData.mortality}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default RowMutator;