import React, { useState } from 'react';
import data from '../converted-data.json'
import { useParams } from "react-router";
import { useEffect } from 'react';

function ExamDetails () {
    const { patientId } = useParams();

    const [exam, setExam] = useState();
    // useEffect(() => {
    //     const url = 'http://localhost:3000/api/details/' + patientId
    //     fetch(url)
    //     .then((response) => {
    //         return response.json
    //     })
    //     .then((data) => {
    //         setExam(data.exam)
    //     })
    // }, [])


    const [patient, setPatient] = useState([
        {
            patientId: "COVID-19-AR-16434409",
            age: "51",
            sex: "M",
            zipCode: "722",
            bmi: "37.7",
            weight: "207",
            image: "COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png",
            examID: "Exam-1",
            icuAdmit: "N",
            icuNum: "0",
            mortality: "N"
        },
    ]);
    return(
        <div>
            <h1>{patientId}</h1>
            {patient.patientId}
        </div>
    )
}
export default ExamDetails