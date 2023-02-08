
function Navbar () {
    return ( 
        <nav class="navbar">
            <div class="brand-title">Brand Name</div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Exams</a></li>
                    <li><a href="#">Admin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;