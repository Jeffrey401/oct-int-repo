import Table from "./Table"
import Search from "../Search"
import './Admin.css'
import React ,{useEffect,useState}from 'react';


export default function Admin({data}) {
    
    return (
        <div>
            <br/>
            <br/>
            <Search data={data}/>
            <div className="tbd">
                <Table />
            </div>
            <PatientMaker />
        </div>
    );
}