import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar-box">
            <NavLink to="/">
                <button class="btn btn-accent">Home</button>
            </NavLink>
            <NavLink to="/restaurants/about">
                <button class="btn btn-accent">About</button>
            </NavLink>
            <NavLink to="/restaurants">
                <button class="btn btn-accent">All Restaurants</button>
            </NavLink>
            <NavLink to="/restaurants/add">
                <button class="btn btn-accent">Add Restaurant</button>
            </NavLink>
        </nav>
    );
}

export default Navbar;