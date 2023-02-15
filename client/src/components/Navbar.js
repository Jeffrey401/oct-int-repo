
function Navbar () {
    return ( 
        <nav className="navbar">
            <div className="brand-title">Brand Name</div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/exams">Exams</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;