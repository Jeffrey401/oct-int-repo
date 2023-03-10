import React from "react";
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../images/hackLogo.png"

function Navbar () {
    return (
        <nav className="navbar">
            <img src= {logo} alt = "logo"></img>
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