import React, {useEffect, useState} from 'react';
import {getTours} from "../../../data_mining/getTours";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from "axios";


const DeleteTourPage = () => {
    const [tours, setTours] = useState(null)



    const deleteTour = async (id) => {
        try {
            const response = await axios.delete(`api/v1/tours/${id}`)
            response.status === 204 && setTours(tours.filter(tour => tour._id !== id))
        }catch (e) {
            console.log(e)
        }
    }

    function deleteConfirmation(id){
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteTour(id)

                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    }

    useEffect(() => {
        getTours().then(data => setTours([...data.data.tours])).catch(e => new Error(e))
    }, [])
 // TODO Make a check about DELTETING!!!!!!!!!!!!!!!!!
    return(
        <div className={'container'}>
            {!tours && <Loader/>}
            <h1 className={'center cyan-text'}>Delete tour</h1>
            <ul className={'collection'}>
            {tours && tours.map((tour) => {
                return <li className={'collection-item '} key={Math.random()}>
                    <span className={'title'}>{tour.name}</span>
                    <p>{tour.price}</p><br/>
                    <Button to={'#'} description={'Delete tour'} deleting={true} onClick={() => {
                        deleteConfirmation(tour._id)
                    }}/>
                </li>
            })}
            </ul>
        </div>
    )
}

export default DeleteTourPage;