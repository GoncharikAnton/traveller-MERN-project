import React from 'react'
import styles from './Footer.module.css'
import {ContactForm} from "../../Components/ContactForm/ContactForm";

export const Footer = () => {
    // console.log('FOOTER render')
    return (
        <>
            <ContactForm/>
            <footer className={`${styles.Footer} page-footer cyan `}>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <div className={`${styles.logo}`}>
                                <img src="/img/svg/logo.svg" alt=""/>
                                <h5 className="white-text">Traveller</h5>
                            </div>
                            <p className="black-text text-lighten-4">We are glad to see you on our web-site! Here you can share your opinion about all your travels all over the world! And of-course you can take some;) Enjoy!</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="black-text">Links</h5>
                            <ul>
                                <li><a className="black-text text-lighten-3" href="#">Home</a></li>
                                <li><a className="black-text text-lighten-3" href="#">Blogs</a></li>
                                <li><a className="black-text text-lighten-3" href="#">Tours</a></li>
                                <li><a className="black-text text-lighten-3" href="#">About Us</a></li>
                                <li><a className="black-text text-lighten-3" href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container black-text">
                        © 2022 Copyright
                        <a className="black-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </>

    )
}