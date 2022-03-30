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


const CreateTourPage = () => {


    useEffect(() => {
        window.M.updateTextFields()
    }, []);

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
        getCategories().then(cat => {
            cat.status === 'success' ? setCat([...cat.data.categories])
                :
                console.log('Cannot load categories')
        }).catch(error => {
            console.log(error)
        })

    }, [])


    const createTour = async () => {
        try{
            axios.post('api/v1/tours', form, { 'Content-Type': 'application/json' }).then((res, req) => {
                console.log(res, req)}).catch(e => console.log(e))
        }catch (e){
            console.log(e)}
    }


    return (
        <div className={'container'}>

            <IntroCapTitle capTitle={'Create new tour'}/>

            <TextInput
                id={'name'}
                name={'name'}
                label={'Enter the title ***'}
                placeholder={'Title:'}
                required={true}
                data={form}
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
                type={'number'}
            />
            <TextInput
                id={'difficulty'}
                name={'difficulty'}
                placeholder={'Difficulty:'}
                label={'Enter the difficulty ***'}
                data={form}
                setData={setForm}
                required={true}
            />
            <DateInput setData={setForm} data={form}/>
            <SwitchInput categories={cat} setData={setForm} data={form}/>
            <TextInput
                id={'rating'}
                name={'rating'}
                placeholder={'Rating: '}
                label={'Enter the rating'}
                data={form}
                setData={setForm}
                type={'number'}
            />
            <TextArea
                id={'description'}
                name={'description'}
                placeholder={'Description: '}
                data={form}
                setData={setForm}
                label={'Enter the description ***'}
            />
            <TextInput
                id={'maxGroupSize'}
                name={'maxGroupSize'}
                label={'Enter the maximum group size ***'}
                placeholder={'Maximum group size: '}
                required={true}
                data={form}
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
                setData={setForm}
            />

            <TextInput
                id={'discount'}
                name={'discount'}
                label={'Enter the discount'}
                placeholder={'Discount: '}
                data={form}
                setData={setForm}
                type={'number'}
            />

            <TextInput
                id={'coordinates'}
                name={'coordinates'}
                label={'Enter the coordinates ***'}
                placeholder={'Coordinates: '}
                required={true}
                data={form}
                setData={setForm}
            />
            {/*<ImageInput img_type={'Cover image'}/>*/}
            {/*<ImageInput img_type={'Images'}/>*/}

            <Button description={'Submit'} onClick={() => createTour()} to={'#'}/>

        </div>
    )
}


export default CreateTourPage;