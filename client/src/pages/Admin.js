import Table from "../components/Table"
import Search from "../components/Search"
import '../styles/Home.css'
import React from 'react';


export default function Home() {


    return (
        <div>
            <br/>
            <br/>
            <Search/>
            <div styles="center">
            
            <Table/>
            </div>
        </div>
    );


}