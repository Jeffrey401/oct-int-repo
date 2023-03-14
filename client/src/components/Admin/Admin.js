import Table from "./Table"
import Search from "../Search"
import './Admin.css'
import PatientMaker from "./PatientMaker";
import React from 'react';


export default function Admin({ data }) {

    return (
        <div>
            <br />
            <br />
           <Search data={data} /> 
            <div className="tbd">
                {data && <Table loadData = {data}/>}
            </div>
            <PatientMaker />
        </div>
    );
}