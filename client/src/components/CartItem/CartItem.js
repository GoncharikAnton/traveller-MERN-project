import styles from './CartItem.module.css'
import {useEffect, useState} from "react";
import {getTours} from "../../data_mining/getTours";

export const CartItem = ({item}) => {

    const [tour, setTour] = useState({})

    useEffect(() => {
        const tour = getTours(null, item.tourId)
            .then(tour => setTour(tour.data.tour))
            .catch(e => console.log(e))
    }, [item])


    console.log(item)
    return (
        <div className={styles.Row}>
            <div className={styles.Cart_img_div }><img src={`/img/${tour.imageCover}`} className={styles.Cart_img}/></div>
            <div className={styles.description_div }>
                <div ><h2>{tour.name}</h2></div>
                <div className={styles.single_div }><h5>{tour.startDates}</h5></div>
                <div className={styles.rating_div } >

                    <span style={{fontSize: '20px'}} className={'name'}>Total price: {item.price}</span>
                    {/*<p onClick={decHandler}
                        style={{color: item.color, fontSize: '22px'}}
                    >{starS.repeat(item.rating)}</p>
                    <p  onClick={incHandler}
                        style={{color: item.color, fontSize: '22px'}}
                        >{starH.repeat(10 - item.rating)}</p>*/}

                </div>
            </div>
            <div style={{backgroundColor: item.color, width: '15px'}}/>
        </div>
    )
}