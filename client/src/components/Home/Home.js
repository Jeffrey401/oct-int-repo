import React, { useState, useEffect } from 'react';
import Card from './Card'
import Data from './../../converted-data.json'



import './Home.css'


function Home() {
  const [sd, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(response => {
        if (response.ok) {
          return response.json();

        }
        else {
          console.log('api error')
        }
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
      }
    </div>
  )
}


export default Home