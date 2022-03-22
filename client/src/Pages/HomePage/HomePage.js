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



export const HomePage = ({props}) => {
    console.log('RENDER HOMEPAGE')
    const [tours, setTours] = useState([])
    const [toursByCat, setToursByCat] = useState([])
    // const [blogCategory, setBlogCategory] = useState('Travel Advices')
    const [tourCategory, setTourCategory] = useState('Forest')
    const [error, setError] = useState(null)
    const data = useCallback(async () => {
        try {
            const response = await axios.get(`/api/v1/tours`, {})
            // const response_cat = await axios.get(`/api/v1/tours?category=${tourCategory}`, {})
            const data = response.data
            // const data_cat = response_cat.data
            await setTours([...data.data.tours])
            // await setToursCat([...data_cat.data.tours])


        }catch (e){
            // error.current = e
            console.log(e)
            setError(e.request.status)
            console.log(e.request.status)
        }
    }, [tours, tourCategory])

    useEffect(() => {
        setToursByCat([])
        let toursByCatTemp = tours.filter((tour) => tour.category === tourCategory)
        setToursByCat([...toursByCatTemp])

        return () => {}
    }, [tours])

    useEffect(() => {
        data()
        return () => {}
    }, [tourCategory])

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
                <HeaderMainDescription props={props}/>
                <div className={'container'}>
                    <div className={styles.IntroCards}>
                        <IntroCard svg={'/img/svg/photo_camera.svg'} cardTitle={'Share your experience'}
                                   cardDescription={'Connect with more people, build influence, ' +
                                       'and create compelling content that is distinctly yours.'}/>
                        <IntroCard svg={'/img/svg/camera_roll.svg'} cardTitle={'Make memorable videos'}
                                   cardDescription={'Express yourself in new ways with the latest Instagram features.'}/>
                        <IntroCard svg={'/img/svg/photo_frame.svg'} cardTitle={'Retouch'}
                                   cardDescription={'Share and grow your brand with our diverse, global community.'}/>
                        <IntroCard svg={'/img/svg/photo_camera.svg'} cardTitle={'Share your experience'}
                                   cardDescription={'Connect with more people, build influence, ' +
                                       'and create compelling content that is distinctly yours.'}/>
                    </div>


                    <CategorySwitcher tours={tours} updateCategory={setTourCategory} activeCategory={tourCategory}/>
                    <div className={styles.shortCards}>

                        {toursByCat.map((tour, i) => {
                            return <TourTravelCardShort updateTourCategory={setTourCategory} key={i}
                                                        tour={tour}/>
                        })}
                        {/*{tours.map((tour, index) => {*/}
                        {/*    index < 3 ? <TourTravelCardShort category={tourCategory} tour={tour}/> : undefined*/}
                        {/*})}*/}
                    </div>

                    <CategorySwitcher tours={tours} updateCategory={setTourCategory} activeCategory={tourCategory}/>
                    <div className={styles.shortCards}>

                        {toursByCat.map((tour, i) => {
                            return <TourTravelCardShort updateTourCategory={setTourCategory} key={i}
                                                        tour={tour}/>
                        })}
                        {/*{tours.map((tour, index) => {*/}
                        {/*    index < 3 ? <TourTravelCardShort category={tourCategory} tour={tour}/> : undefined*/}
                        {/*})}*/}
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }


        return(
            <>
                {!error ? <Loader/> : <h3>SOMETHING WENT WRONG, RELOAD THE PAGE</h3>}
            </>
            // <Loader/>
    )
}
