import React, { useState, useEffect } from "react";
import './search.css'


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
