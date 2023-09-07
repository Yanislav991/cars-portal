import React from "react";
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <section className="logo-section">
                <NavLink to='/'>
                    <span className="logo-text">
                        Cars<span>Portal</span>
                    </span>
                </NavLink>
            </section>
            <section className="links-section">
                <ul>
                    <li className="link-container">
                        <NavLink to="/login">
                            <span>Login</span>
                        </NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink to="/register">
                            <span>Register</span>
                        </NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink to="/">
                            <span>Logout</span>
                        </NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink to="/login">
                            <span>Browse</span>
                        </NavLink>
                    </li>
                </ul>
            </section>
        </nav>
    )
}