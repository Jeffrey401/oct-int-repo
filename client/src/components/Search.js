import { useState } from "react"
import data from '../converted-data.json'

export default function Search() {


    const [searchValue, setSearchValue] = useState("")
    const [filterData, setFilterData] = useState(data)
    const onInputChange = (e) => {
        setSearchValue(e.target.value)
        setFilterData(data.filter((item) => item.patientId.includes(searchValue)))
        console.table(filterData)
    }


    return (
        <div>
            <input 
                value={searchValue} 
                onChange={onInputChange}  
                list = "searchV" 
                type="search"  
                className="searchExp" 
                placeholder="Patient ID, First or LastName">
            </input>
            <datalist id="searchV" >
                {
                    filterData.map(patient =>
                        <option  key={patient.patientId} value={patient.patientId}> {patient.patientId}</option>)
                }
            </datalist>
            </div>
          
    )
}
