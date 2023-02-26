import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exams from './pages/Exams'
import Admin from './pages/Admin'
import Card from './components/Card'
import Data from './converted-data.json'

function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/exams":
      Component = Exams
      break;
    case "/admin":
      Component = Admin
      break;
    default:
      console.log('error')
  }

  return (
    <>
      <Navbar/>
      <div class="test-container">
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
  );
}

export default App;