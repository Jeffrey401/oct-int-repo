import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <React.Fragment>
      <Navbar/>
      <h1>Home</h1>
    </React.Fragment>
  );
}

export default App;
