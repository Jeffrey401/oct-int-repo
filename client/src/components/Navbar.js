import React from "react";
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../images/images/hackLogo.png"
import Home from "./Home/Home";
function Navbar () {
    return (
        <nav className="navbar">
            <img className="ms-3" width={50} src= {logo} alt = "logo"
                onClick={() => <Link to={<Home/>}></Link>}>
            </img>
            <div className="brand-title">Oct-In Medical</div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/admin"}>Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;