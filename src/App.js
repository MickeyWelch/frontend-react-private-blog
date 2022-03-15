import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {useForm} from 'react-hook-form';

import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <Menu
                isAuth={isAuthenticated}
                toggleAuth={toggleIsAuthenticated}
            />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <PrivateRoute exact path="/blog" isAuth={isAuthenticated}>
                    <Blog/>
                </PrivateRoute>
                <Route exact path="/login">
                    <Login
                        isAuth={isAuthenticated}
                        toggleAuth={toggleIsAuthenticated}
                    />
                </Route>
                <Route exact path="/blog/:blogId">
                    <Post/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;
