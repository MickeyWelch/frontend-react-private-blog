import React from 'react';

function Home(props) {
    return (
        <div className="content">
            <h1>Private blog</h1>
            <h2>Sudocode</h2>
            <article>
                <h3>Part 1</h3>
                <ul className="checklist">
                    <li className="done">npm install react-router-dom@5.2.0 > npm start, set BrouwserRouter in index.js</li>
                    <li className="done">maak pages en componenten map</li>
                    <li className="done">maak pages en comps met basis inhoud</li>
                    <li className="done">maar switch en route in app.js</li>
                    <li className="done">NavLinks in ul in menu component, check of switch het doet, zet component in app.js</li>
                    <li className="done">loginpagina Button toevoegen</li>
                    <li className="done">blogpagina: import json, p tag met .length, map voor titles, zet in ul, maak Links</li>
                    <li className="done">postpagina: import json, imprt useParams, find maken, toevoegen title, date, content</li>
                </ul>
            </article>
            <article>
                <h3>Part 2</h3>
                <ul className="checklist">
                    <li className="done">voeg props toe aan Loginpage en aan componentn in app.js</li>
                    <li className="done"> maak inlog functie voor button op Loginpage en onClick aan button</li>
                    <li className="done">useHistory in functie routen naar page en zet in functie</li>
                    <li className="done">voeg logout menuitem toe aan menu component</li>
                    <li className="done">render menu items conditioneel aan isAuthenticated state</li>
                    <li className="done">gebruik zelfde methode in navigatiecomponent (isAuthenticated to false)</li>
                </ul>
            </article>
            <article>
                <h3>Bonus</h3>
                <ul className="checklist">
                    <li className="done">maak PrivateRoute component met basis inhoud</li>
                    <li className="done">zet props en functie van opdracht 2 in component</li>
                    <li>Vervang Route om Blog component in switch met PrivateRoute</li>
                    <li>--</li>
                    <li>maak users.json met id, naam, wachtwoord</li>
                    <li>npm install react-hook-form <code>npm install react-hook-form</code> , voeg toe aan LoginPage</li>
                    <li>beetje css</li>
                </ul>
            </article>
        </div>
    );
}

export default Home;