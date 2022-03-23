import React from "react";
import {Button} from "../Button/Button";

export const TourTravelCardLong = ({tour}) => {

    // console.log('render TOURLONG')

    return (
        <div className="card large">
            <div className="card-image">
                <img src="/img/nature/main.jpg"/>
                <span className="card-title">{tour.name}</span>
            </div>
            <div className="card-content">
                <p>{tour.description}</p>
                <Button to={'/'} description={'Read more...'}/>
            </div>

        </div>
    )
}