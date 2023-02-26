import {Link} from "react-router-dom"

function Navbar () {
    return (
        <nav className="navbar">
            <div className="brand-title">Brand Name</div>
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