import React, { useState, useEffect } from "react";
import './search.css'
import { getData } from "./util/util";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
   //Fetching the data from the database
   const [data, setData] = useState(null);
const getDt = async () => {
  const dt = await getData();
  console.log(dt)
  setData(dt);
  return dt;
}
  const [filterData, setFilterData] = useState(getDt());
  
  //const [selectedOption, setSelectedOption] = useState("");





  useEffect(() => {
    const timer = setTimeout(() => {
      // Something
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

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

  //const handleOptionChange = (e) => {
  //  setSelectedOption(e.target.value);
  //};

  return (
    <div className="search-container">
      <h1>Patient Search</h1>
      <div >
         <input
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
        
        <br/>
        <br/>
        
      </div>
    </div>
  );
}
