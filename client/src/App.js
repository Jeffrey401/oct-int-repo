import './App.css';

import { Link, Route, Routes } from "react-router-dom";

import { useApi } from './hooks/use-api';
import Login from './pages/Login';
function App() {
  const { response } = useApi();



  let _home = ((path != '/') ? <li><Link to="/" >  <Icon libraryName='home' /> Home</Link></li> : null)

  let _graph = ((path != '/graph') ? <li><Link to="/graph"><Icon libraryName='desktop' /> Graph</Link></li> : null)
  let _contact = ((path != '/contact') ? <li><Link to="/contact"><Icon libraryName='phone' /> Contact Us</Link></li> : null)
  let _about = ((path != '/about') ? <li><Link to="/about" >About Us</Link></li> : null)

  return (
    <div className="App">


<nav>
        <ul>
          <li><Link to="/"> <img src={'http://2.bp.blogspot.com/-NA5Jb-64eUg/URx8CSdcj_I/AAAAAAAAAUo/eCx0irI0rq0/s400/bg_Microsoft_logo3-20120824073001907469-620x349.jpg'} height="100" width="auto" /> </Link></li>
        </ul>
        <ul style={{ display: 'rows' }}>
          <b>
          {_home}
          <li className="vertical-separator" />
          {_graph}
          <li className="vertical-separator" />
          {_contact}
          </b>
        </ul>
      </nav>


      <Routes>
        <Route path="/"  />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;
