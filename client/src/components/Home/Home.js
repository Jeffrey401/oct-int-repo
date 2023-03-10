import React, { useState, useEffect } from 'react';
import Card from './Card'

import './Home.css'


function Home({data}) {



  return (
    <div className="test-container">
     {
            data && data.map(exam => {
              return (
                <div key={exam.patientId}>

                  <Card 
                    patientId = {exam.patientId}
                    imageUrl = {exam.image}
                    age = {exam.age}
                    sex = {exam.sex}
                  />
                </div>
              )
            })
          }
    </div>
  )
}


export default Home