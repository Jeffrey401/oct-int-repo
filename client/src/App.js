import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Admin from './components/Admin/Admin'
import ExamDetails from './components/ExamDetails'
import RecordList from './components/ExamList'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import '../src/App.css'
import useGetData from "./components/util/util";
import { Navigate } from 'react-router-dom'

function App() {

  const data = useGetData();

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Home data={data}/>}/>
          <Route path='/admin' element={<Admin data={data}/>}/>
          <Route path='/details/:patientId' element={<ExamDetails/>}/>
          <Route exact path="/" element={<RecordList />} />     
          <Route path="/oct-int-repo" element={<Navigate to="/" />} />  
        </Routes>
      </div>
    </BrowserRouter>

  )
}



export default App;