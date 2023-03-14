import Table from "./Table"

import './Admin.css'

import React,{useState} from "react";


export default function Admin({ data }) {
    const [actionToConfirm, setActionToConfirm] = useState(false);
    
    return (
        <div>
           
            <div className="tbd">
                {data && <Table loadData={data} length = {data.length} onTrue={actionToConfirm}/>}
            </div>

        </div>
    );
}