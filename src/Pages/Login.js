import React from 'react';

function Login({isAuth, toggleAuth}) {
    console.log(isAuth);
    function loginToBlog() {
        toggleAuth(true);
    }

    return (

        <>
            <h1>Login</h1>
            <button
                type="button"
                onClick={loginToBlog}
            >Inloggen</button>
            <p>Ik ben ingelogd: {`${isAuth}`}</p>
        </>
    );
}

export default Login;