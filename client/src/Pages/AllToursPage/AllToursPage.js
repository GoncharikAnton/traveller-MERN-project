import React, {useCallback, useEffect, useState} from "react";
import styles from "./AllToursPage.module.css"
import {Loader} from "../../Components/Loader/Loader";
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";
import {CategorySwitcher} from "../../Components/CategorySwitcher/CategorySwitcher";
import {getTours} from "../../DataMining/getTours";
import {TourTravelCardLong} from "../../Components/TourTravelCardLong/TourTravelCardLong";


export const AllToursPage = () => {
    const [tours, setTours] = useState([])
    const [category, setCategory] = useState(null)


    useEffect(() => {
        getTours()
            .then((data) => {
                if(data.status === 'success'){
                    setTours([...data.data.tours])
                }
            })
            .catch(e => {
                console.log(e)
            })
        return () => {}
    }, [])

    const updateCategory = useCallback((category) => {
      setCategory(category)
    }, [])


    return (
        <>
            <HeaderMainDescription title={'Tours'} description={'Here you can take OUR tours! \n' +
                'Our’s tour guides are the bests in this!They will show you the best places of our planet! \n' +
                'If you need to consult, call us or write on e-mail!'} to={'/contacts'} buttonDescription={'Contact us!'}
            />
            <div className={'container'}>
                <CategorySwitcher updateCategory={updateCategory} activeCategory={category}/>
                {!tours && <Loader/>}
                {!category && tours.map((tour) => {
                    return <TourTravelCardLong key={tour._id} tour={tour}/>
                } )}
                {category && tours.filter((tour) => (tour.category === category)).map((tour) => {
                    return <TourTravelCardLong key={tour._id} tour={tour}/>
                } )}
            </div>

        </>
    )
}