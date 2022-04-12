import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {getCart} from "../../../data_mining/getCart";
import {IntroCapTitle} from "../../../components/IntroCapTitle/IntroCapTitle";
import {CartItem} from "../../../components/CartItem/CartItem";


const CartPage = () => {

    const auth = useContext(AuthContext)
    const [cart, setCart] = useState([])


    useEffect(
        () => {
            const data = getCart(auth.userId)
            data.then(data => {
                setCart( [...data])
                // console.log(cart)
            })
            // console.log(auth)
        },
        [],
    );


    return(
        <div className={'container'}>
            <IntroCapTitle capTitle={'Your order'}/>

            <IntroCapTitle capTitle={'Ordered tours'}/>
            <ul className="collection">
                {cart.length === 0 && <h4>No orders yet</h4>}
                {cart && cart.map((i) => {
                    return <li className="collection-item" key={i._id}><CartItem item={i}/></li>

                })}

            </ul>
        </div>
    )
}

export default CartPage;