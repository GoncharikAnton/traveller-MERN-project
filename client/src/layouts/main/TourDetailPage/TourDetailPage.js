import React, {useEffect, useState} from 'react';
import HeaderMainDescription from "../../../components/HeaderMainDescription/HeaderMainDescription";
import {getTours} from "../../../data_mining/getTours";
import Loader from "../../../components/Loader/Loader";
import {shortDescriptionCalc, threePartDescription} from "../../../data_mining/shortScripts/shortDescriptionCalc";
import {IntroCapTitle} from "../../../components/IntroCapTitle/IntroCapTitle";
import DescriptionCardWhite from "../../../components/DescriptionCardWhite/DescriptionCardWhite";
import DescriptionCardCyan from "../../../components/DescriptionCardCyan/DescriptionCardCyan";
import IntroCard from "../../../components/IntroCard/IntroCard";
import PriceCard from "../../../components/PriceCard/PriceCard";
import {useSelector} from "react-redux";
import Button from "../../../components/Button/Button";
import {useNavigate} from "react-router";
import MapApi from "../../../components/Map/MapApi";
import Map from "../../../components/Map/Map";

import styles from './TourDetailPage.module.css'

const TourDetailPage = () => {

    const store = useSelector((state) => state.preview.preview)
    const tour_id = window.location.pathname.split('/').pop()
    const [tour, setTour] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        if(store._id === 'preview'){
            setTour(store)
        }else{
            getTours(null, tour_id)
                .then((data) => data.status === 'success' ? setTour({...data.data.tour}) : undefined)
                .catch(e => {
                    console.log(e)
                })
            return () => {
            }
        }
        }, [tour_id])


    if (tour) {
        console.log(tour)
        const date = new Date(tour.startDates[0])
        const coordinates = tour.coordinates ? tour.coordinates.split(', ') : ['35', '35']
        const location = {
            address: tour.name,
            lat: +coordinates[0],
            lng: +coordinates[1],
        }
        const shortDescription = shortDescriptionCalc(tour.description)
        const descThreePart = threePartDescription(tour.description)
        return (
            <>
            {store._id === 'preview' && <div className={'container'}>
                <IntroCapTitle capTitle={'PREVIEW'}/>
                <Button to={'/create_tour'} description={'GO BACK TO CREATE TOUR'}/>
            </div>}


                <HeaderMainDescription img={`/img/${tour.imageCover}`}
                                       description={shortDescription}
                                       title={tour.name}
                                       button={false}
                                       rating={tour.ratingsAverage}
                />
                <div className={'container'}>
                    <IntroCapTitle capTitle={tour.name}/>
                    <div className={styles.IntroCards_div}>
                        <IntroCard svg={'/img/svg/difficulty_graph.svg'} cardTitle={`Difficulty | ${tour.difficulty}`}/>
                        <IntroCard svg={'/img/svg/duration.svg'} cardTitle={`Duration | ${tour.duration} days`}/>
                        <IntroCard svg={'/img/svg/rating_star.svg'} cardTitle={`Rating | ${tour.ratingsAverage} points`}/>
                        <IntroCard svg={'/img/svg/calendar.svg'} cardTitle={`Start | ${date.toDateString()}`}/>
                    </div>
                    <DescriptionCardWhite span_text={descThreePart[0]} img={`/img/${tour.images[0]}`}/>
                    <DescriptionCardCyan span_text={descThreePart[1]} img={`/img/${tour.images[1]}`}/>
                    <DescriptionCardWhite span_text={descThreePart[2]} img={`/img/${tour.images[2]}`}/>
                    <IntroCapTitle capTitle={'Where'}/>
                    <Map location={location} zoomLevel={17} />
                    {/*<MapApi/>*/}
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