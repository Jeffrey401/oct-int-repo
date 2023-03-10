import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import '../styles/search.css'
import Home from "./Home/Home"
import data from "../converted-data.json";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(data);
  
  const [selectedOption, setSelectedOption] = useState("");
=======
import './search.css'
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1

  useEffect(() => {
    const timer = setTimeout(() => {
      // Something
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

<<<<<<< HEAD
  const onInputChange = (e) => {
    setSearchValue(e.target.value);
    setFilterData(
      data.filter(
        (item) =>
          item.patientId.includes(searchValue) ||
          item.firstName.includes(searchValue) ||
          item.lastName.includes(searchValue)
      )
    );
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="search-container">
      <h1>Patient Search</h1>
      <div >
        <input
=======
export default function Search({data}) {
  const [searchValue, setSearchValue] = useState("");
   //Fetching the data from the database

  const [filterData, setFilterData] = useState(data);
  
  //const [selectedOption, setSelectedOption] = useState("");
  const dt = data;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Something
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const onInputChange = (e) => {
    
    setSearchValue(e.target.value);
    setFilterData(
      dt.filter(
        (item) =>
          item.patientId.includes(searchValue) ||
          item.firstName.includes(searchValue) ||
          item.lastName.includes(searchValue)
      )
    );
  };

  //const handleOptionChange = (e) => {
  //  setSelectedOption(e.target.value);
  //};

  return (
    <div className="search-container">
   
      <h1>Patient Search</h1>
      <div >
         <input
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
          value={searchValue}
          onChange={onInputChange}
          list = "searchV"
          type= "search"
          className= "searchExp"
          placeholder="Patient ID, First or LastName"
        />
        <datalist id="searchV" >
                {
                    filterData.map(patient =>
                        <option  key={patient.patientId} value={patient.patientId}> {patient.patientId}</option>)
                }
        </datalist>
<<<<<<< HEAD

        <br/>
        <br/>
=======
        
        <br/>
        <br/>
        
>>>>>>> 69ace80371a90a6d854ecfcf59da577fb885bcb1
      </div>
    </div>
  );
}
