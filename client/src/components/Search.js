import React, { useState, useEffect } from "react";
import data from "../converted-data.json";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(data);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterData(
        data.filter(
          (item) =>
            item.patientId.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="search-container">
      <h1>Patient Search</h1>
      <div className="search-bar">
        <input
          value={searchValue}
          onChange={onInputChange}
          type="search"
          placeholder="Patient ID, First or LastName"
        />
      </div>
    </div>
  );
}
