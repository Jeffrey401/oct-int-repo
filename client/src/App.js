import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import ExamDetails from './components/ExamDetails'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='test-container'>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/details/:patientId' element={<ExamDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;