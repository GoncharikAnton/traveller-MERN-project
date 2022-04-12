import styles from './CartItem.module.css'
import {useEffect, useState} from "react";
import {getTours} from "../../data_mining/getTours";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import axios from "axios";

export const CartItem = ({item, cart = null, token = null}) => {
    const [tour, setTour] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        const tour = getTours(null, item.tourId)
            .then(tour => setTour(tour.data.tour))
            .catch(e => console.log(e))
    }, [item])

    const buyTourHandler = () => {
        axios.patch('/api/v1/users/updateMe', {cart: [...cart, {
                        price: item.price,
                        persons: 1,
                        tourId: item.tourId
                    }]},
            {headers: {"Authorization" : `Bearer ${token}`}}).then(res => console.log(res)).catch(e => console.log(e))
        dispatch({type: 'REMOVEFROMCART'})
    }
    const removeFromCartHandler = () => {
        dispatch({type: 'REMOVEFROMCART'})
    }


    return (
        <div className={styles.Row}>
            <div className={styles.Cart_img_div }><img src={`/img/${tour.imageCover}`} className={styles.Cart_img}/></div>
            <div className={styles.description_div }>
                <div ><h2>{tour.name}</h2></div>
                <div className={styles.single_div }><h5>{tour.startDates}</h5></div>
                <div className={styles.rating_div } >

                    <span style={{fontSize: '20px'}} className={'name'}>Total price: {item.price}</span>
                    {item.priceType ? <div><Button onClick={() => buyTourHandler()} to={'!#'} description={'Buy the tour'}/>
                        <Button onClick={() => removeFromCartHandler()}
                                description={'Remove from cart'}
                                to={'!#'}
                                deleting={true}/>
                    </div> : undefined}


                </div>
            </div>
            <div style={{backgroundColor: item.color, width: '15px'}}/>
        </div>
    )
}