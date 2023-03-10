<<<<<<< HEAD
import React, { useState } from 'react';
import data from '../converted-data.json'
import { useParams } from "react-router";
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

=======
import React, { useState, useEffect } from 'react';
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1

import { useParams } from "react-router";
import { useSearchParams } from 'react-router-dom';

function ExamDetails() {
    const { patientId } = useParams();
    const [exams, setExams] = useState();
      // function to set the data
  const [data, setData] = useState(null);


    // This doesnt work, need urgent care!!!
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



  //Fetching the data from the database
  useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(response => {
          return response.json();
      })
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => console.error(error));
  }, []); 
    return (
        <div>
                    <h1>{patientId}</h1>
                    {
                        data && data.filter(exams => exams.patientId == patientId)
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