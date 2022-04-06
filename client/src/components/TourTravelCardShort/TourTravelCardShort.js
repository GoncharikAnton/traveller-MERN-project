import React  from 'react';
import styles from './TourTravelCardShort.module.css'
import Button from "../Button/Button";
import {shortDescriptionCalc} from '../../data_mining/shortScripts/shortDescriptionCalc'
import Loader from "../Loader/Loader";

export const tour_travel_card_short = ({tourCategory, tour}) => {
    // console.log('rendered')
    const shortDescription = shortDescriptionCalc(tour.description)


    return (
        <>
            {!tour && <Loader/>}
            {tour &&<div className={`col s12 m6 l4 ${styles.cards}`} >
                <div className="card large hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={`/img/${tour.imageCover}`}/>
                    </div>
                    <div className={`${styles['card-content']}`}>
                    <span className="card-title activator grey-text text-darken-4">{tour.name}<i
                        className="material-icons right">more_vert</i></span>
                        <div className={'span-div'}><span>Difficulty | </span><span>{tour.difficulty}</span></div><br/>
                        <span>Duration   | {tour.duration} days</span><br/>
                        <span>Rating     | {tour.ratingsAverage} points</span><br/>
                        <span>Price      | {tour.price} $</span><br/>
                        {/*<span>{shortDescription}</span>*/}
                        {/*<span>Start | ${tour.startDates.toDateString()}</span><br/>*/}
                        <div className={styles.btn}><Button to={`/tours/${tour._id}`} description={'Read about'}/></div>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{tour.name}<i
                        className="material-icons right">close</i></span>
                        <p>{tour.description}</p>
                    </div>
                </div>
            </div>}
        </>




    )
}

export const TourTravelCardShort = React.memo(tour_travel_card_short)

