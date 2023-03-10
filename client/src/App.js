import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
<<<<<<< HEAD
import Admin from './pages/Admin'
=======
import Admin from './components/Admin/Admin'
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
import ExamDetails from './components/ExamDetails'
import RecordList from './components/ExamList'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import '../src/App.css'
import useGetData from "./components/util/util";

function App() {

  const data = useGetData();

  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route index element={<Home data={data}/>}/>
          <Route path='/admin' element={<Admin data={data}/>}/>
          <Route path='/details/:patientId' element={<ExamDetails/>}/>
          <Route exact path="/" element={<RecordList />} />        </Routes>
      </div>
    </BrowserRouter>

  )
}



export default App;