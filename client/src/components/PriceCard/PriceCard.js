import React from 'react';
import Button from "../Button/Button";


import styles from './PriceCard.module.css'

const PriceCard = ({priceType, price, priceDescription, tourId, to = null}) => {


    return(
        <div className={`${styles.PriceCard} card-panel hoverable`}>
            <div><span className="flow-text">{priceType}</span></div>
            <div><span className="flow-text cyan-text">{price}</span></div>
            <div><span className="description">{priceDescription}</span></div>
            <div><Button to={'#'} description={'Buy the tour'} /></div>
        </div>
    )
}

export default PriceCard;