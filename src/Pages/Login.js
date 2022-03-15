import React  from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import users from '../data/users.json';

function Login({isAuth, toggleAuth}) {
    const history = useHistory();

    // Hookform
    const {register, formState: { errors }, handleSubmit} = useForm();

    const validateName = users.find((user) => {
        return user.name === users.name;
    })
    const validatePassword = users.find((user) => {
        return user.password === users.password;
    })

    function onFormSubmit(validateName, validatePassword){
        // console.log(validateName, validatePassword);
        toggleAuth(true);
        history.push('blog');
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name *"
                    {...register("name", {
                        required: "Naam mag niet leeg zijn",
                    })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                <label htmlFor="password"></label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password *"
                    {...register("password",{
                        required: "Password mag niet leeg zijn",
                    })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <button
                    type="submit"
                >Inloggen</button>
            </form>

        </div>
    );
}

export default Login;