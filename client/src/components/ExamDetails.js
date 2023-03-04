import React, { useState } from 'react';
import data from '../converted-data.json'
import { useParams } from "react-router";
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List } from '@mui/material';
import { ListItem } from '@material-ui/core';


function ExamDetails() {
    //     const { patientId } = useParams();

//     const [exams, setExams] = useState();
//     useEffect(() => 
//         const url = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams' + patientId
//         fetch(url)
//         .then((response) => {
//             return response.json
//         })
//         .then((data) => {
//             setExams(data)
//         })
//     }, [])

    const exams = {
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
    }
    const { patientId } = useParams()

    return (
        <div>
                    <h1>{patientId}</h1>
                    {
                        data.filter(exam => exam.patientId == patientId)
                        .map(exam => 
                            // <List>
                            //     <ListItem>
                            //         Age: {exam.age}
                            //     </ListItem>
                            // </List>
                            <div>
                                Age: {exam.age}
                                <br/>
                                Sex: {exam.sex}
                                <br/>

                                Zip Code: {exam.zipCode}
                                <br/>

                                BMI: {exam.bmi}
                                <br/>

                                Weight: {exam.weight}
                                <br/>

                                Image: {exam.image}
                                <br/>

                                examID: {exam.examID}
                                <br/>

                                icuAdmit: {exam.icuAdmit}
                                <br/>

                                icuNum: {exam.icuNum}
                                <br/>

                                mortality: {exam.mortality}
                            </div>
                            )
                    }

                    
        </div>
    )
}


export default ExamDetails