import React, {useEffect} from 'react';
// import 'materialize-css'
import M from  'materialize-css/dist/js/materialize.min.js';
import './Navbar.css'
import {Link} from "react-router-dom";
export const Navbar = () => {

    useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "right",
        inDuration: 250
    });
        }, [])


        return (
                <nav className={'Navbar'}>
                    <div className="nav-wrapper cyan lighten-1">
                        <Link to="/" className="brand-logo"><img src='/img/svg/logo.svg' alt="logo"/>Traveller</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/tours">Tours</Link></li>
                            <li><Link to="/about_us">About Us</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/">Login/Register</Link></li>
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/tours">Tours</Link></li>
                        <li><Link to="/about_us">About Us</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/">Login/Register</Link></li>
                    </ul>
                </nav>
        )
}


