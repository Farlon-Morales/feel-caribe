import { NavLink } from "react-router-dom";

function Restaurants() {
    return (
        <nav className="restaurants-box">
            
            <NavLink to="/restaurants/">
                <button>See All</button>
            </NavLink>
            
        </nav>
    );
}

export default Restaurants;