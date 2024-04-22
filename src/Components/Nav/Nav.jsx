import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <ul>
            <li>
                <NavLink to="/BasalteHome">Basalte Home</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/Realisations">Realisations</NavLink>
            </li>
            <li>
                <NavLink to="/OurStory">OurStory</NavLink>
            </li>
            <li>
                <NavLink to="/Careers">Careers</NavLink>
            </li>
        </ul>
    );
}

export default Nav;
