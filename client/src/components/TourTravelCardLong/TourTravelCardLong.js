import React from "react";
import Button from "../Button/Button";
import styles from "./TourTravelCardLong.module.css"
import IntroCard from "../IntroCard/IntroCard";

const TourTravelCardLong = ({tour}) => {

    // console.log('render TOURLONG')

    return (
        <div className="card large card-panel hoverable ">
            <div className="card-image">
                <img src="/img/nature/main.jpg"/>
                <span className="card-title">{tour.name}</span>
            </div>
            <div className={`card-content ${styles['card-content']} `}>
                <div className={styles.IntroCards_div}>
                    <IntroCard svg={'/img/svg/difficulty_graph.svg'} cardTitle={`Difficulty | ${tour.difficulty}`}/>
                    <IntroCard svg={'/img/svg/duration.svg'} cardTitle={`Duration | ${tour.duration} days`}/>
                    <IntroCard svg={'/img/svg/rating_star.svg'} cardTitle={`Rating | ${tour.ratingsAverage} points`}/>
                    {/*<IntroCard svg={'/img/svg/calendar.svg'} cardTitle={`Start | ${tour.startDates.toDateString()}`}/>*/}
                </div>
                <p>{tour.description}</p>
                <Button to={`/tours/${tour._id}`} description={'Read more...'}/>
            </div>

        </div>
    )
}

export default TourTravelCardLong;