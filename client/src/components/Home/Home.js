import React, { useState } from 'react';
import Card from './Card'
import Search from '../Search'

import Data from './../../converted-data.json'
import "../search.css"

import './Home.css'

const Home = (props) => {
    return(
      <>
        <Search/>
       
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
      </>
    )
}
export default Home