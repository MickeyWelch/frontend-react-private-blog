import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Post from "./Pages/Post";


// npm install react-router-dom@5.2.0 > npm start, set BrouwserRouter in index.js
// maak pages en componenten map
// maak pages en comps met basis inhoud
// maar switch en route in app.js
// NavLinks in ul in menu component, check of switch het doet, zet component in app.js
// loginpagina Button toevoegen
// blogpagina: import json, p tag met .length, map voor titles, zet in ul, maak Links
// postpagina: import json, imprt useParams, find maken, toevoegen title, date, content

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
      Maak hier jouw prachtige blog-applicatie!
        <Menu />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/blog/:blogId">
                <Post />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
