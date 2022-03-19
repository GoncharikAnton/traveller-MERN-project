import React, {useEffect} from 'react';
import 'materialize-css'
import M from  'materialize-css/dist/js/materialize.min.js';
import './Navbar.css'
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
                        <a href="#!" className="brand-logo"><img src='/img/logo/logo.svg' alt="logo"/>Traveller</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Tours</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Login/Register</a></li>
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Tours</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Login/Register</a></li>
                    </ul>
                </nav>
        )
}


