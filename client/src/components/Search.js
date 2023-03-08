import React, { useState, useEffect } from "react";
import './search.css'

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(null);
  
  const [selectedOption, setSelectedOption] = useState("");

 // function to set the data
 const [data, setData] = useState(null);

 //Fetching the data from the database
 useEffect(() => {
   fetch('http://localhost:9000/exams')
     .then(response => {
         return response.json();
     })
     .then(data => {
       console.log(data)
       setData(data)
       setFilterData(data)
     })
     .catch(error => console.error(error));
 }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Something
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
    setFilterData(
      data && data.filter(
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
          value={searchValue}
          onChange={onInputChange}
          list = "searchV"
          type= "search"
          className= "searchExp"
          placeholder="Patient ID, First or LastName"
        />
        <datalist id="searchV" >
                {
                    data && filterData.map(patient =>
                        <option  key={patient.patientId} value={patient.patientId}> {patient.patientId}</option>)
                }
        </datalist>

        <br/>
        <br/>
      </div>
    </div>
  );
}
