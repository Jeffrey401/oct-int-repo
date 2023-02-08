import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exams from './pages/Exams'
import Admin from './pages/Admin'

function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/exams":
      Component = Exams
      break;
    case "/admin":
      Component = Admin
      break;
  }

  const [patientData, setData] = useState(data);

  return (
    <>
      <Navbar/>
      <div class="test-container">
        <Component/>
      </div>
    </>
  );
}

export default App;