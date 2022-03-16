import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function Menu({isAuth, toggleAuth}) {

    const history = useHistory();

    function logoutFromBlog() {
        history.push('blog')
        toggleAuth(false);
        console.log(isAuth)
    }

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>{isAuth && <NavLink to="/blog">Blog</NavLink>}</li>
                    <li>
                        {!isAuth && <NavLink to="/login">Login</NavLink>}
                        {isAuth && <NavLink to="/" onClick={logoutFromBlog}>Logout</NavLink>}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;