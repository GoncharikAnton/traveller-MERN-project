import styles from './CartItem.module.css'
import {useEffect, useState} from "react";
import {getTours} from "../../data_mining/getTours";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import Loader from "../Loader/Loader";
import store from "../../redux/store";

export const CartItem = ({item, cart = null, token = null, inCart = false}) => {
    const [tour, setTour] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [persons, setPersons] = useState(1)

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elem = document.querySelector('.materialboxed');
            var instance = window.M.Materialbox.init(elem, {});
            console.log(instance)

        });
    }, [])


    useEffect(() => {
        getTours(null, item.tourId)
            .then(tour => {
                setTour(tour.data.tour)
            })
            .catch(e => console.log(e))
    }, [item])

    const buyTourHandler = () => {
        axios.patch('/api/v1/users/updateMe', {
                cart: [...cart, {
                    price: +item.price * +persons,
                    persons: persons,
                    tourId: item.tourId,
                    priceType: item.priceType
                }]
            },
            {headers: {"Authorization": `Bearer ${token}`}})
            .then(res => res).catch(e => console.log(e))
        dispatch({type: 'REMOVEFROMCART'})

    }
    const removeFromCartHandler = () => {
        dispatch({type: 'REMOVEFROMCART'})
    }
    const incHandler = () => {
        if (tour.maxGroupSize > persons) {
            setPersons(persons + 1)
        }
    }
    const decHandler = () => {
        if (persons > 1) setPersons(persons - 1)
    }


    if (tour.name) {
        return (
            <div className={`row ${!inCart && 'hoverable'} `}>
                <div className={`col s12 m4 l4 ${styles.imageCover_div}`}>
                    <img
                        src={`/img/${tour.imageCover}`}
                        className={`materialboxed ${styles.imageCover}`}
                        width={'100%'}
                    />
                </div>
                <div className={`col s12 m8 l8 ${styles.description_div}`}>
                    <div onClick={() => navigate(`/tours/${tour._id}`)} className={styles.h3_tour}>
                        <h3>{tour.name}</h3>
                    </div>
                    <div><h5>Start date: {!!tour.startDates && tour.startDates[0].substring(0, 10)}</h5></div>
                    <div>
                        {inCart ?
                            <>
                                <div className={styles.quantity_div}>
                                    <h5>Participants:
                                        <Button
                                            description={'-'}
                                            to={'#'}
                                            onClick={() => decHandler()}
                                        />
                                        <span>{persons}</span>
                                        <Button
                                            description={'+'}
                                            to={'#'}
                                            onClick={() => incHandler()}
                                        />
                                    </h5>
                                </div>
                                <div className={styles.buttons_div}>
                                    <Button onClick={() => buyTourHandler()} to={'#'} description={'Buy the tour'}/>
                                    <Button onClick={() => removeFromCartHandler()}
                                            description={'Remove from cart'}
                                            to={'#'}
                                            deleting={true}/>
                                </div>
                            </>
                            : undefined}
                        <span style={{fontSize: '20px'}}>
                            Total price: {+item.price * persons}$
                        </span>
                        <span
                            style={{fontSize: '18px'}}>
                            (Participants : {item.persons || persons}, Price: {item.priceType})
                        </span>
                    </div>
                </div>
                <div />
            </div>
        )
    } else {
        return <Loader/>
    }

}