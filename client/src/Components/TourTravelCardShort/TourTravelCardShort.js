import React, {memo, useEffect} from 'react';
import styles from './TourTravelCardShort.module.css'
import Button from "../Button/Button";
import {shortDescriptionCalc} from '../../DataMining/shortScripts/shortDescriptionCalc'

export const tour_travel_card_short = ({tourCategory, tour}) => {
    // console.log('rendered')

    const shortDescription = shortDescriptionCalc(tour.description)


    return (


        <>
            <div className={`col s12 m4 l4 ${styles.cards}`} >
                <div className="card hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="/img/nature/main.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{tour.name}<i
                        className="material-icons right">more_vert</i></span>
                        <p><Button to={`/tours/${tour._id}`} description={'Read about the tour'}/></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{tour.name}<i
                        className="material-icons right">close</i></span>
                        <p>{shortDescription}</p>
                    </div>
                </div>
            </div>
        </>




    )
}

export const TourTravelCardShort = React.memo(tour_travel_card_short)


/*    // <div className={`row ${styles.cards}`}>
    <div className={`col s12 m4 l4 ${styles.cards}`}>
<div className="card medium hoverable">
    <div className="card-image">
    <img src="/img/nature/main.jpg"/>
    <span className="card-title">{tour.name}</span>
<a className="btn-floating halfway-fab waves-effect waves-light cyan"><i
    className="material-icons">add</i></a>
</div>
<div className="card-content">
    <p>{shortDescription}</p>
    <Button to={`/tours/${tour._id}`} description={'Read more'}/>
</div>

</div>
</div>
// </div>*/

