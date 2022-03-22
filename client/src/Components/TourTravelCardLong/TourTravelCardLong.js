import React from "react";

export const TourTravelCardLong = ({tour}) => {

    console.log(tour)

    return (
        <div className="card large">
            <div className="card-image">
                <img src="/img/nature/main.jpg"/>
                <span className="card-title">{tour.name}</span>
            </div>
            <div className="card-content">
                <p>{tour.description}</p>
            </div>

        </div>
    )
}