import React ,{ useEffect, useState } from 'react';

function useGetData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://oct-in-api.onrender.com/exams')
      .then(response => response.json())
      .then(data =>  setData(data))
      .catch(error => console.error(error));
  }, []);
  return data;
}

export default useGetData;



