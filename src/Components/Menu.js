import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;