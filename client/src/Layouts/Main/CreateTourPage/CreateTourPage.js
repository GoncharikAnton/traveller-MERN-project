import React, {useEffect, useState} from "react";
import {TextInput} from "../../../Components/TextInput/TextInput";
import {IntroCapTitle} from "../../../Components/IntroCapTitle/IntroCapTitle";
import TextArea from "../../../Components/TextArea/TextArea";
import ImageInput from "../../../Components/ImageInput/ImageInput";
import {getCategories} from "../../../DataMining/getCategories";
import SwitchInput from "../../../Components/SwitchInput/SwitchInput";
import DateInput from "../../../Components/DateInput/DateInput";


const CreateTourPage = () => {

    useEffect(() => {
        window.M.updateTextFields()
    }, []);

    const [form, setForm] = useState({
        title: '', duration: '',
        difficulty: '', category: '',
        rating: null, description: '',
        maximumGroupSize: null, price: null,
        discount: null, coverImg: null,
        imgs: null, startDates: null

    });
    let [cat, setCat] = useState([]);

    useEffect(() => {
        getCategories().then(cat => {
            cat.status === 'success' ? setCat([...cat.data.categories])
                :
                console.log('Cannot load categories')
        }).catch(error => {console.log(error)})

    }, [])


    // const changeHandler = (name, value) => {
    //     setForm({...form, [name] : value})
    //     console.log(form)
    // }


    // useEffect(() => {
    //     console.log(cat)
    // }, [cat])
    console.log(form)
    return (
        <div className={'container'}>

            <IntroCapTitle capTitle={'Create new tour'}/>
            {/*Start dates:                        Date Picker*/}

            <TextInput
                id={'title'}
                name={'title'}
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
            <SwitchInput categories={cat}/>
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
                id={'max_group_size'}
                name={'max_group_size'}
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
                id={'discount'}
                name={'discount'}
                label={'Enter the discount'}
                placeholder={'Discount: '}
                data={form}
                setData={setForm}
                type={'number'}
            />


            <ImageInput img_type={'Cover image'}/>
            <ImageInput img_type={'Images'}/>

        </div>
    )
}


export default CreateTourPage;