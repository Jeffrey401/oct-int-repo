import Table from "./Table"
import Search from "../Search"
import './Admin.css'
import PatientMaker from './PatientMaker'
import React from 'react';

export default function Home() {

    return (
        <div>
            <br/>
            <br/>
            <Search/>
            <div className="tbd">
                <Table />
            </div>
            <PatientMaker />
        </div>
    );
}