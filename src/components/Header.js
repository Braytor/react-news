import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <img src= "img/logo192.png" alt="logo" />
                <h3>React World</h3>
            </div>
            <NavLink className="navLink" exact to="/" activeClassName="nav-active">Accueil </NavLink>

            <NavLink className="navLink" exact to="news" activeClassName="nav-active">News</NavLink>

            <NavLink className="navLink" exact to="a-propos" activeClassName="nav-active"> A propos</NavLink>

        </div>
    );
};

export default Header;
