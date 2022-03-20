// import 'materialize-css';
import {useCallback, useEffect, useState} from "react";
import {Header} from "../Layouts/Header/Header";
import {CategorySwitcher} from "../Components/CategorySwitcher/CategorySwitcher";
import {Footer} from "../Layouts/Footer/Footer";
import {IntroCard} from "../Components/IntroCard/IntroCard";
import styles from './HomePage.module.css'
import {TravelCardShort} from "../Components/TravelCardShort/TravelCardShort";
import axios from "axios";

export const HomePage = ({props}) => {
    const [tours, setTours] = useState(null)
    const [blogCategory, setBlogCategory] = useState('Travel Advices')
    const [tourCategory, setTourCategory] = useState('Travel')

    const data = useCallback(async () => {
        try {
            const data = await axios.get('/api/v1/tours', {method: 'GET'})
            console.log(data)
            await setTours([...data.data.data.tours])
        }catch (e){
            console.log(e.message)}
    }, [tours])


    useEffect(() => {
        data()
        return () => {}
    }, [])

    const tours_h = {
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

    const updateBlogCategory = (blogCategory) => {
        setBlogCategory({category: blogCategory})
    }
    const updateTourCategory = (tourCategory) => {
        setTourCategory({category: tourCategory})
    }

    return (
        <div>
            {/*<Header props={props}/>*/}
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

                {/*<CategorySwitcher blogs={blogs} updateCategory={updateBlogCategory} category={blogCategory}/>*/}
                <CategorySwitcher tours={tours} updateCategory={updateTourCategory} category={tourCategory}/>
                <div className={styles.shortCards}>

                    {/*{tours && <TravelCardShort category={tourCategory} tours={tours}/>}*/}

                    {/*<TravelCardShort category={tourCategory}/>*/}
                    {/*<TravelCardShort category={category}/>*/}
                    {/*<TravelCardShort category={category}/>*/}

                </div>

            </div>
            {/*<Footer/>*/}
        </div>
    );
}
