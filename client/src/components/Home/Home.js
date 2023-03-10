import React, { useState, useEffect } from 'react';
import Card from './Card'
<<<<<<< HEAD
import Search from '../Search'

import Data from './../../converted-data.json'
import "../../styles/search.css"

import './Home.css'

const Home = (props) => {
    return(
      <>
        <Search/>
       
        <div className="test-container">
          {
            Data.map(exam => {
=======

import './Home.css'


function Home({data}) {



  return (
    <div className="test-container">
     {
            data && data.map(exam => {
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
              return (
                <div key={exam.patientId}>

                  <Card 
                    patientId = {exam.patientId}
<<<<<<< HEAD
=======
                    patientName = {exam.patientName}
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
                    imageUrl = {exam.image}
                    age = {exam.age}
                    sex = {exam.sex}
                  />
                </div>
              )
            })
          }
<<<<<<< HEAD
        </div>
      </>
    )
=======
    </div>
  )
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
}


export default Home