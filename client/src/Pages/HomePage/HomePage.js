// import 'materialize-css';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {Header} from "../../Layouts/Header/Header";
import {CategorySwitcher} from "../../Components/CategorySwitcher/CategorySwitcher";
import {Footer} from "../../Layouts/Footer/Footer";
import {IntroCard} from "../../Components/IntroCard/IntroCard";
import styles from './HomePage.module.css'
import {TourTravelCardShort} from "../../Components/TourTravelCardShort/TourTravelCardShort";
import axios from "axios";
import {IntroCapTitle} from "../../Components/IntroCapTitle/IntroCapTitle";
import {Loader} from "../../Components/Loader/Loader";
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";


const blogs = {
    capTitle: "Travel's blogs",
    cat1: {
        title: 'Travel Advices',
        to: '/'
    },
    cat2: {
        title: 'Work & Travel',
        to: '/'
    },
    cat3: {
        title: 'By Country',
        to: '/'
    },
    cat4: {
        title: 'Travel Costs',
        to: '/'
    },
}



export const HomePage = ({props}) => {
    console.log('RENDER HOMEPAGE')
    const [tours, setTours] = useState([])
    // const [blogCategory, setBlogCategory] = useState('Travel Advices')
    const [tourCategory, setTourCategory] = useState('Ocean')
    // const tourCategory = useRef('Ocean');
    const [tourResults, setTourResults] = useState(0)

    const data = useCallback(async () => {
        try {
            const response = await axios.get('/api/v1/tours', {})
            const data = response.data
            await setTours([...data.data.tours])
            await setTourResults(data.results)

        }catch (e){
            console.log(e)}
    }, [tours])


    useEffect(() => {
        data()
        return () => {}
    }, [])

    // const updateBlogCategory = (blogCategory) => {
    //     setBlogCategory({category: blogCategory})
    // }

    // const updateTourCategory = useCallback(() => {
    //     setTourCategory(tourCategory)
    //     console.log(tourCategory)
    // }, [tourCategory])

    // const updateTourCategory = (category) => {
    //     tourCategory.current = category
    //     console.log(tourCategory)
    // }


    if(tours.length){
        return (
            <div>
                {/*<HeaderMainDescription props={props}/>*/}
                <div className={'container'}>
                    {/*<div className={styles.IntroCards}>*/}
                    {/*    <IntroCard svg={'/img/svg/photo_camera.svg'} cardTitle={'Share your experience'}*/}
                    {/*               cardDescription={'Connect with more people, build influence, ' +*/}
                    {/*                   'and create compelling content that is distinctly yours.'}/>*/}
                    {/*    <IntroCard svg={'/img/svg/camera_roll.svg'} cardTitle={'Make memorable videos'}*/}
                    {/*               cardDescription={'Express yourself in new ways with the latest Instagram features.'}/>*/}
                    {/*    <IntroCard svg={'/img/svg/photo_frame.svg'} cardTitle={'Retouch'}*/}
                    {/*               cardDescription={'Share and grow your brand with our diverse, global community.'}/>*/}
                    {/*    <IntroCard svg={'/img/svg/photo_camera.svg'} cardTitle={'Share your experience'}*/}
                    {/*               cardDescription={'Connect with more people, build influence, ' +*/}
                    {/*                   'and create compelling content that is distinctly yours.'}/>*/}
                    {/*</div>*/}


                    <CategorySwitcher tours={tours} updateCategory={setTourCategory} category={tourCategory}/>
                    <div className={styles.shortCards}>

                        {<TourTravelCardShort category={tourCategory} tours={tours}/>}

                        {/*{tours.map((tour, index) => {*/}
                        {/*    index < 3 ? <TourTravelCardShort category={tourCategory} tour={tour}/> : undefined*/}
                        {/*})}*/}




                    </div>

                </div>
                {/*<Footer/>*/}
            </div>
        );
    }


        return(
        <Loader/>
    )
}
