import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function Login({isAuth, toggleAuth}) {
    const history = useHistory();

    function loginToBlog() {
        history.push('blog')
        toggleAuth(true);
    }

    // Hookform
    const {register} = useForm();

    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label htmlFor="name">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        {...register("name")}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="button"
                    onClick={loginToBlog}
                >Inloggen</button>
            </form>

        </div>
    );
}

export default Login;