import React, { useState } from 'react';
import Card from './Card'
import Data from './../../converted-data.json'

import './Home.css'

function Home() {
    return(
      <div className="test-container">
        {
          Data.map(exam => {
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