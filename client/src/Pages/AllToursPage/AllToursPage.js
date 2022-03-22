import React, {useCallback} from "react";

import styles from "./AllToursPage.module.css"
import {Loader} from "../../Components/Loader/Loader";
import axios from "axios";


export const AllToursPage = () => {

    // const data = useCallback(async () => {
    //     try {
    //         const response = await axios.get(`/api/v1/tours`, {})
    //         // const response_cat = await axios.get(`/api/v1/tours?category=${tourCategory}`, {})
    //         const data = response.data
    //         // const data_cat = response_cat.data
    //         await setTours([...data.data.tours])
    //         // await setToursCat([...data_cat.data.tours])
    //
    //
    //     }catch (e){
    //         // error.current = e
    //         console.log(e)
    //         setError(e.request.status)
    //         console.log(e.request.status)
    //     }
    // }, [tours, tourCategory])
    //
    // if(true){
    //     return (
    //         <div></div>
    //     )
    // }

    return(
        <div>
            <Loader/>

        </div>
    )
}