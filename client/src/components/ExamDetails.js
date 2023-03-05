import React, { useState, useEffect } from 'react';
import data from '../converted-data.json'
import { useParams } from "react-router";
import { useSearchParams } from 'react-router-dom';

function ExamDetails() {
    const { patientId } = useParams();
    const [exams, setExams] = useState();

    useEffect(() => {
    const url = 'https://czi-covid-lypffhkrzry4q-uc.a.run.app/api/exams' + patientId
    fetch(url)
    .then((response) => {
        return response.json
    })
    .then((data) => {
        setExams(data)
    })

}, []);
    return (
        <div>
                    <h1>{patientId}</h1>
                    {
                        data.filter(exams => exams.patientId == patientId)
                        .map(exams => 
                            // <List>
                            //     <ListItem>
                            //         Age: {exams.age}
                            //     </ListItem>
                            // </List>
                            <div>
                                Age: {exams.age}
                                <br/>
                                Sex: {exams.sex}
                                <br/>

                                Zip Code: {exams.zipCode}
                                <br/>

                                BMI: {exams.bmi}
                                <br/>

                                Weight: {exams.weight}
                                <br/>

                                Image: {exams.image}
                                <br/>

                                examsID: {exams.examsID}
                                <br/>

                                icuAdmit: {exams.icuAdmit}
                                <br/>

                                icuNum: {exams.icuNum}
                                <br/>

                                mortality: {exams.mortality}
                            </div>
                            )
                    }

                    
        </div>
    )
}

export default ExamDetails