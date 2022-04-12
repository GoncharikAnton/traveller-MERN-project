import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";


const CartPage = () => {

    const auth = useContext(AuthContext)


    console.log(auth)

    return(
        <div>
            <h1>CART</h1>
        </div>
    )
}

export default CartPage;