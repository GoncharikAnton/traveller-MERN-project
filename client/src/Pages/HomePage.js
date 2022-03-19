import 'materialize-css';
import {Navbar} from "./Components/Navbar/Navbar";
import {useCallback, useEffect, useState} from "react";

export const HomePage = () => {
    const [tours, setTours] = useState([])

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




    return (
        <div>
            {/*<button onClick={data}>DATA</button>*/}
            {/*{tours && tours.map((tour, index) => {*/}
            {/*    console.log(tour)*/}
            {/*    return <li key={index}>*/}
            {/*        <h1>{tour.name}</h1>*/}
            {/*        <h5>{tour.description}</h5>*/}
            {/*        <h4>{tour.price}</h4>*/}
            {/*    </li>*/}
            {/*})}*/}
        </div>
    );
}
