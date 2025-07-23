import { NavLink } from "react-router-dom";

function About() {
    return (
        <nav className="about-box">
            
            <NavLink to="/restaurants/about">
                <button>About</button>
            </NavLink>
            
        </nav>
    );
}

export default About;