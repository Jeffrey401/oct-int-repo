import React, { useState, useEffect } from 'react';
import Card from './Card'
import Data from './../../converted-data.json'



import './Home.css'


function  Home()  {
  const [sd, setData] = useState(null);

    fetch('127.0.0.1:9000/exams')
      .then(response => {
        if(response.ok){
          console.log("respondds was oki")
          return response.text();
          
        }
        else{
          console.log('api error')}
      })
      .then(body => {
        console.log(body)

        setData(body)
      })
      .catch (error => console.error(error));

 
    return(
      <div className="test-container">
        {   
            
            console.log()
        }
      </div>
    )}


export default Home