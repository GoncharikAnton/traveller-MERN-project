// import 'materialize-css';
import {useCallback, useEffect, useState} from "react";
import {Header} from "../Layouts/Header/Header";
import {CategorySwitcher} from "../Components/CategorySwitcher/CategorySwitcher";
import {Footer} from "../Layouts/Footer/Footer";
import {IntroCard} from "../Components/IntroCard/IntroCard";
import styles from './HomePage.module.css'

export const HomePage = ({props}) => {
    // const [tours, setTours] = useState([])

    // const data = useCallback(async () => {
    //     try {
    //         const response = await fetch('/api/v1/tours', {method: 'GET'})
    //         const data = await response.json()
    //         console.log(...Object.values(data.data.tours))
    //         await setTours([...Object.values(data.data.tours)])
    //
    //     }catch (e){
    //         console.log(e.message)}
    // }, [tours])
    //
    // useEffect(() => {
    //     data()
    //     return () => {}
    // }, [])

    const tours = {
        capTitle: "Tours",
        cat1: {
            title: 'Mountain',
            to: '/'
        },
        cat2: {
            title: 'Ocean',
            to: '/'
        },
        cat3: {
            title: 'Forest',
            to: '/'
        },
        cat4: {
            title: 'City',
            to: '/'
        },
    }
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


    return (
        <div>
            <Header props={props}/>

            {/*<button onClick={data}>DATA</button>*/}
            {/*{tours && tours.map((tour, index) => {*/}
            {/*    console.log(tour)*/}
            {/*    return <li key={index}>*/}
            {/*        <h1>{tour.name}</h1>*/}
            {/*        <h5>{tour.description}</h5>*/}
            {/*        <h4>{tour.price}</h4>*/}
            {/*    </li>*/}
            {/*})}*/}
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
                <CategorySwitcher props={blogs}/>
            </div>
            <Footer/>
        </div>
    );
}
