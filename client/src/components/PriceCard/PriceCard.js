import React, {useContext} from 'react';
import Button from "../Button/Button";


import styles from './PriceCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../context/AuthContext";

const PriceCard = ({priceType, price, priceDescription, tourId, to = null}) => {

    const user = useContext(AuthContext)
    const cart_store = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    return(
        <div className={`${styles.PriceCard} card-panel hoverable `}>
            <div><span className="flow-text">{priceType}</span></div>
            <div><span className="flow-text cyan-text">{price}</span></div>
            <div><span className="description">{priceDescription}</span></div>
            <div><Button to={'#'} description={'Buy the tour'} /></div>
        </div>
    )
}

export default PriceCard;