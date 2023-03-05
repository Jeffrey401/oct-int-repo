import Table from "../components/Table"
import Search from "../components/Search"
import '../styles/Admin.css'
import React from 'react';


export default function Home() {


    return (
        <div>
            <br/>
            <br/>
            <Search/>
            <div className="tbd">
                <Table/>
            </div>
        </div>
    );


}