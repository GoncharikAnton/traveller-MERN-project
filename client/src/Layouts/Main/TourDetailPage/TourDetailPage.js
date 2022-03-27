import React, {useEffect, useState} from 'react';
import HeaderMainDescription from "../../../Components/HeaderMainDescription/HeaderMainDescription";
import {getTours} from "../../../DataMining/getTours";
import Loader from "../../../Components/Loader/Loader";
import {shortDescriptionCalc, threePartDescription} from "../../../DataMining/shortScripts/shortDescriptionCalc";
import IntroCapTitle from "../../../Components/IntroCapTitle/IntroCapTitle";
import DescriptionCardWhite from "../../../Components/DescriptionCardWhite/DescriptionCardWhite";
import DescriptionCardCyan from "../../../Components/DescriptionCardCyan/DescriptionCardCyan";
import Map from "../../../Components/Map/Map";
import IntroCard from "../../../Components/IntroCard/IntroCard";
// import PriceCard from "../../../Components/PriceCard/PriceCard";

import styles from './TourDetailPage.module.css'
import PriceCard from "../../../Components/PriceCard/PriceCard";


const TourDetailPage = () => {


    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }

    const tour_id = window.location.pathname.split('/').pop()
    const [tour, setTour] = useState(null)

    useEffect(() => {
        getTours(null, tour_id)
            .then((data) => data.status === 'success' ? setTour({...data.data.tour}) : undefined)
            .catch(e => {
                console.log(e)
            })
        return () => {
        }
    }, [tour_id])

    if (tour) {
        // console.log(tour.startDates)
        const date = new Date(tour.startDates[0])
        const shortDescription = shortDescriptionCalc(tour.description)
        const descThreePart = threePartDescription(tour.description)
        return (
            <>
                <HeaderMainDescription img={'/img/cover/tour-1-cover.jpg'}
                                       description={shortDescription}
                                       title={tour.name}
                                       button={false}
                                       rating={tour.ratingsAverage}
                />
                <div className={'container'}>
                    <div className={styles.IntroCards_div}>
                        <IntroCard svg={'/img/svg/difficulty_graph.svg'} cardTitle={`Difficulty | ${tour.difficulty}`}/>
                        <IntroCard svg={'/img/svg/duration.svg'} cardTitle={`Duration | ${tour.duration} days`}/>
                        <IntroCard svg={'/img/svg/rating_star.svg'} cardTitle={`Rating | ${tour.ratingsAverage} points`}/>
                        <IntroCard svg={'/img/svg/calendar.svg'} cardTitle={`Start | ${date.toDateString()}`}/>
                    </div>
                    <IntroCapTitle capTitle={tour.name}/>
                    <DescriptionCardWhite span_text={descThreePart[0]} img={'/img/nature/tour-2-1.jpg'}/>
                    <DescriptionCardCyan span_text={descThreePart[1]} img={'/img/nature/tour-2-2.jpg'}/>
                    <DescriptionCardWhite span_text={descThreePart[2]} img={'/img/nature/tour-2-3.jpg'}/>
                    <IntroCapTitle capTitle={'Where'}/>
                    <Map location={location} zoomLevel={17} />
                    <IntroCapTitle capTitle={'Price'}/>
                    <div className={`${styles.PriceCard_div}`}>
                        <PriceCard priceType={'Standard'}
                                   price={tour.price}
                                   tourId={tour._id}
                                   priceDescription={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
                        <PriceCard priceType={'Gold'}
                                   price={Math.floor(tour.price * 1.3)}
                                   tourId={tour._id}
                                   priceDescription={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
                        <PriceCard priceType={'Premium'}
                                   price={Math.floor(tour.price * 1.8)}
                                   tourId={tour._id}
                                   priceDescription={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
                    </div>

                </div>

            </>
        )
    }

    return (
        <div className={'container'}>
            {!tour && <Loader/>}
        </div>
    )
}

export default TourDetailPage;