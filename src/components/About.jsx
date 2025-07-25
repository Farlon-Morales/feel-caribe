import { NavLink } from "react-router-dom";

function About() {
    return (
        <nav className="restaurants-box">
            
            <NavLink to="/restaurants/About">
                <button>About FeelCaribe</button>
            </NavLink>
            
        </nav>
    );
}

export default About;