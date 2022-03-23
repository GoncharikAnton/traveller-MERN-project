import React, {useEffect, useState} from 'react';
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";
import {getTours} from "../../DataMining/getTours";
import {Loader} from "../../Components/Loader/Loader";
import {shortDescriptionCalc} from "../../DataMining/shortScripts/shortDescriptionCalc";
import {IntroCapTitle} from "../../Components/IntroCapTitle/IntroCapTitle";
import {DropDownMenu} from "../../Components/DropDownMenu/DropDownMenu";


export const TourDetailPage = () => {

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
        const shortDescription = shortDescriptionCalc(tour.description)

        return (
            <>
                <HeaderMainDescription img={'/img/cover/tour-1-cover.jpg'}
                                       description={shortDescription}
                                       title={tour.name}
                                       button={false}
                                       rating={tour.ratingsAverage}
                />
                <div className={'container'}>
                    <IntroCapTitle capTitle={tour.name}/>
                    <h1>{tour.name}</h1>
                    <DescriptionCardWhite span_text={} img={'/img/nature/tour-2-1'}/>
                    <DescriptionCardCyan span_text={} img={'/img/nature/tour-2-2'}/>
                    <DescriptionCardWhite span_text={} img={'/img/nature/tour-2-3'}/>
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