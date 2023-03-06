

export const getData = async() =>{

    //Fetching th data from the database
    const response = await fetch('http://localhost:9000/exams');
    const data = await response.json(); 

    return data ;
};