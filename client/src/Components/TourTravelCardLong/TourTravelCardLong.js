import React from "react";
import Button from "../Button/Button";

const TourTravelCardLong = ({tour}) => {

    // console.log('render TOURLONG')

    return (
        <div className="card large card-panel hoverable">
            <div className="card-image">
                <img src="/img/nature/main.jpg"/>
                <span className="card-title">{tour.name}</span>
            </div>
            <div className="card-content">
                <p>{tour.description}</p>
                <Button to={`/tours/${tour._id}`} description={'Read more...'}/>
            </div>

        </div>
    )
}

export default TourTravelCardLong;