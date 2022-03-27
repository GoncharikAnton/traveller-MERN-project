import React from 'react';
import HeaderMainDescription from "../../../Components/HeaderMainDescription/HeaderMainDescription";
import IntroCapTitle from "../../../Components/IntroCapTitle/IntroCapTitle";
import Map from "../../../Components/Map/Map";

import styles from "./ContactsPage.module.css"

const ContactPage = () => {

    const location = {
        address: 'Ha-Yarkon Street, Tel Aviv Heroes, Bnei Brak',
        lat: 32.09681309937593,
        lng: 34.82457826896672,
    }

    return(
        <>
            <HeaderMainDescription/>
        <div className="container">
            <IntroCapTitle capTitle={"Our contacts"}/>
            <div className={`${styles.contactsDiv} cyan`}>
                <div className={styles.imgDiv}>
                    <img src="/img/tower.jpg" alt="tower"/>
                </div>
                <div className={styles.spanDiv}>
                    <span><strong>Address:</strong>  Ha-Yarkon Street, Tel Aviv Heroes, Bnei Brak</span>
                    <span><strong>Postal code:</strong>  220077</span>
                    <span><strong>Phone:</strong>  +5455545151</span>
                    <span><strong>E-mail:</strong>  exampel@traveller.com </span>
                </div>
            </div>
            <IntroCapTitle capTitle={"Where we are?"}/>
            <Map location={location} zoomLevel={17} />
        </div>
        </>
    )
}

export default ContactPage;