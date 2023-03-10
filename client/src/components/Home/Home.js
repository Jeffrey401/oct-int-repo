import React, { useState, useEffect } from 'react';
import Card from './Card'

import './Home.css'


function Home({data}) {


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
    <div className="test-container">
      {
        data && data.map(exam => {
          return (
            <div key={exam.patientId}>

              <Card
                patientId={exam.patientId}
                imageUrl={exam.image}
                age={exam.age}
                sex={exam.sex}
              />
            </div>
          )
        })
      }
    </div>
  )
}


export default Home