import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
    return (
        <React.Fragment>
            <header className="nav-header">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" ><a href="#">HOME</a></NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" ><a href="#">PROJECTS</a></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us"><a href="#">ABOUT US</a></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us"><a href="#">CONTACT US</a></NavLink>
                    </li>
                </ul>
            </header>
        </React.Fragment>
    )
}

export default Navigation
