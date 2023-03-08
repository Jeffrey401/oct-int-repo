import React ,{useEffect, useState} from "react";



export const getData = async() =>{

  //Fetching the data from the database
  useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(response => {
          return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => console.error(error));
  }, []);

    return null ;
};