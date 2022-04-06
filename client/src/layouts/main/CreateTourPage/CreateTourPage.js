import React, {useEffect, useState} from "react";
import {TextInput} from "../../../components/TextInput/TextInput";
import {IntroCapTitle} from "../../../components/IntroCapTitle/IntroCapTitle";
import TextArea from "../../../components/TextArea/TextArea";
import ImageInput from "../../../components/ImageInput/ImageInput";
import {getCategories} from "../../../data_mining/getCategories";
import SwitchInput from "../../../components/SwitchInput/SwitchInput";
import {DateInput} from "../../../components/DateInput/DateInput";
import Button from "../../../components/Button/Button";
import axios from "axios";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
const _ = require("lodash")


const CreateTourPage = () => {

    console.log('render')

    const navigate = useNavigate()

    // useEffect(() => {
    //     window.M.updateTextFields()
    // }, []);
    const store = useSelector((state) => state)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: '', duration: '',
        difficulty: '', category: '',
        rating: null, description: '',
        maxGroupSize: null, price: null,
        discount: null, imageCover: "tour-1-1.jpg",
        images: ["tour-1-1.jpg",
            "tour-1-2.jpg",
            "tour-1-3.jpg"], startDates: [],
        summary: '', coordinates: ''

    });


    let [cat, setCat] = useState([]);


    useEffect(() => {
        let abortController = new AbortController();
        getCategories().then(cat => {
            cat.status === 'success' ? setCat([...cat.data.categories])
                :
                console.log('Cannot load categories')
        }).catch(error => {
            console.log(error)
        })
        return () => {
            abortController.abort();
        }
    }, [])

    useEffect(() => {
        let abortController = new AbortController();
        if (store._id === 'preview') {
            setForm(store)
        }
        return () => {
            abortController.abort();
        }
    }, [])


    useEffect(() => {
        dispatch({type: 'PREVIEW', payload: form})
    }, [form])

    const createTour = async () => {
        let status = null;
        try {
            axios.post('api/v1/tours', form, {'Content-Type': 'application/json'}).then((res, req) => {
                // console.log(res)
                if (res.status === 201) {
                    status = res.status
                    return navigate(`/tours/${res.data.data.tour._id}`)
                }
            }).catch(e => {
                console.log(e)
                if (status !== 201 && e) {
                    return alert("Some fields are empty/invalid. Check your tour's data.")
                }
            })
        } catch (e) {
            console.log(e)
        }
    }


    function preview() {
        dispatch({type: 'PREVIEW', payload: {...form, _id: 'preview'}})
        navigate(`/tour/preview`)
        return
    }

    function clean() {
        dispatch({type: 'CLEAN'})
        return
    }

    return (
        <div className={'container'}>

            <IntroCapTitle capTitle={'Create new tour'}/>

            <div className={'row'}><p>Fields marked *** - are required fields!</p><Button
                to={'/tours/preview'}
                onClick={() => {
                    preview()
                }} description={'PREVIEW'}/></div>

            <TextInput
                id={'name'}
                name={'name'}
                label={'Enter the title ***'}
                placeholder={'Title:'}
                required={true}
                data={form}
                text_value={store.name}
                setData={setForm}
            />
            <TextInput
                id={'duration'}
                name={'duration'}
                placeholder={'Duration:'}
                label={'Enter the duration ***'}
                required={true}
                data={form}
                setData={setForm}
                text_value={store.duration}
                type={'number'}
            />
            <TextInput
                id={'difficulty'}
                name={'difficulty'}
                placeholder={'Difficulty:'}
                label={'Enter the difficulty ***'}
                data={form}
                setData={setForm}
                text_value={store.difficulty}
                required={true}
            />
            <DateInput setData={setForm} data={form} date_value={store.startDates}
            />
            <SwitchInput categories={cat} setData={setForm} data={form} switch_value={store.category}
            />
            <TextInput
                id={'rating'}
                name={'rating'}
                placeholder={'Rating: '}
                label={'Enter the rating'}
                data={form}
                text_value={store.rating}
                setData={setForm}
                type={'number'}
            />
            <TextArea
                id={'description'}
                name={'description'}
                placeholder={'Description: '}
                data={form}
                setData={setForm}
                area_value={store.description}
                label={'Enter the description ***'}
            />
            <TextInput
                id={'maxGroupSize'}
                name={'maxGroupSize'}
                label={'Enter the maximum group size ***'}
                placeholder={'Maximum group size: '}
                required={true}
                data={form}
                text_value={store.maxGroupSize}
                setData={setForm}
                type={'number'}
            />

            <TextInput
                id={'price'}
                name={'price'}
                label={'Enter the price ***'}
                placeholder={'Price: '}
                required={true}
                data={form}
                text_value={store.price}
                setData={setForm}
                type={'number'}
            />
            <TextInput
                id={'summary'}
                name={'summary'}
                label={'Enter the summary description ***'}
                placeholder={'Summary: '}
                required={true}
                data={form}
                text_value={store.summary}
                setData={setForm}
            />

            <TextInput
                id={'discount'}
                name={'discount'}
                label={'Enter the discount'}
                placeholder={'Discount: '}
                data={form}
                setData={setForm}
                text_value={store.discount}
                type={'number'}
            />

            <TextInput
                id={'coordinates'}
                name={'coordinates'}
                label={'Enter the coordinates ***'}
                placeholder={'Coordinates: '}
                required={true}
                data={form}
                text_value={store.coordinates}
                setData={setForm}
            />
            {/*<ImageInput img_type={'Cover image'}/>*/}
            {/*<ImageInput img_type={'Images'}/>*/}

            <Button description={'Submit'} onClick={() => {
                console.log(form)
                delete(form._id)
                clean()
                return createTour()
            }} to={'#'}/>

        </div>
    )
}


export default CreateTourPage;