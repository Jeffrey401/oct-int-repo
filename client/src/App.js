import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Admin from './pages/Admin'
import ExamDetails from './components/ExamDetails'
import RecordList from './components/ExamList'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import '../src/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/details/:patientId' element={<ExamDetails/>}/>
          <Route exact path="/" element={<RecordList />} />        </Routes>
      </div>
    </BrowserRouter>

  )
}



export default App;