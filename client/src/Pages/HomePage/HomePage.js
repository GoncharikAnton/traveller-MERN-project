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
import {Button} from "../../Components/Button/Button";


export const HomePage = () => {

    const [tours, setTours] = useState([])
    // const [blogCategory, setBlogCategory] = useState('Travel Advices')
    const [tourCategory, setTourCategory] = useState('Forest')
    const [error, setError] = useState(null)

    const data = useCallback(async () => {
        try {
            // const response = await axios.get(`/api/v1/tours`, {})
            const response = await axios.get(`/api/v1/tours?category=${tourCategory}`, {})
            const data = response.data
            await setTours([...data.data.tours])

        }catch (e){
            console.log(e)
            setError(e.request.status)
            console.log(e.request.status)
        }
    }, [tourCategory])

    const updateCategory = useCallback((category) => {
        setTourCategory(category);
    }, []);

    useEffect(() => {
        data()
        // console.log(d)
        return () => {}
    }, [tourCategory])


    if(tours.length){
        return (
            <div>
                <HeaderMainDescription title={'Welcome to Traveller!'}
                description={'We are glad to see you on our web-site! \n' +
                'Here you can share your opinion about all your travels all over the world! And of-course you can take some;)\n' +
                'Enjoy!'}/>
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


                    <CategorySwitcher updateCategory={updateCategory} activeCategory={tourCategory}
                                      rely={'tours'}/>
                    <div className={styles.shortCards}>

                        {tours.map((tour, i) => {
                            return <TourTravelCardShort updateTourCategory={updateCategory} key={i}
                                                        tour={tour}/>
                        })}

                    </div>
                    <Button to={'/tours'} description={'See more our tours'}/>

                </div>
            </div>
        );
    }


        return(
            <>
                {!error ? <Loader/> : <h3>SOMETHING WENT WRONG, RELOAD THE PAGE</h3>}
            </>
    )
}
