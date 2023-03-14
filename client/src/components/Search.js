import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './search.css'


export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");

   //Fetching the data from the database

  const [filterData, setFilterData] = useState(props.data);
  
  //const [selectedOption, setSelectedOption] = useState("");
  const dt = props.data;

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

  const handleClick  = () => {
    const found = dt.find(obj => {
      return obj.patientId === searchValue
    }) 
    props.onAction(found);

  }

  return (
    <div className="search-container text-center">
   
      <h1>Patient Search</h1>
      <div >
         <input
          value={searchValue}
          onChange={onInputChange}
          onKeyPress={handleClick}
          list = "searchV"
          type= "search"
          className= "searchExp"
          placeholder="Patient ID, First or LastName"
        />
        <datalist id="searchV" >
                {
                    filterData && filterData.map(patient =>
                        <option  key={patient.patientId} value={patient.patientId}> {patient.patientId  }</option>)
                }
        </datalist>
        
        <br/>
        <br/>
        
      </div>
    </div>
  );
}