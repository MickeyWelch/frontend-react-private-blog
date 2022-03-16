import React from 'react';
import {Redirect, Route} from "react-router-dom";

function PrivateRoute({isAuth, children, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth === true ? children : <Redirect to="/login"/>}
        </Route>
    );
}

export default PrivateRoute;