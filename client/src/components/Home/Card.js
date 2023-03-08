import './Card.css'
import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {
    const exam = props
    const imgApi = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/"
    return (
        <div className="card-container">
            <div className='image-container'>
                <img src={imgApi + exam.imageUrl} alt="chest x-ray"></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {exam.patientId}
                </div>
                <div className='card-body'>
                    <p>{exam.age}</p>
                    <p>{exam.sex}</p>
                </div>
            </div>

            <div className='btn'>
                <button>
                    <Link to={"/details/" + exam.patientId}>
                        View More
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card