import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            <NavLink to="/restaurants/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/restaurants/add">
                <button>Add Restaurant</button>
            </NavLink>
        </nav>
    );
}

export default Navbar;