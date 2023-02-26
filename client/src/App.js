import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import Details from './components/Details'
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
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;