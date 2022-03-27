import React, {useState} from "react";
import TextInput from "../../../Components/TextInput/TextInput";
import IntroCapTitle from "../../../Components/IntroCapTitle/IntroCapTitle";
import TextArea from "../../../Components/TextArea/TextArea";
import ImageInput from "../../../Components/ImageInput/ImageInput";
import {getCategories} from "../../../DataMining/getCategories";



const CreateTourPage = () => {

    const [form, setForm] = useState({});


    // let [cat, setCat] = useState([])
    // const categories = getCategories();
    // categories.then(cat => {
    //         cat.status === 'success' ? setCat([...cat.data.categories])
    //             :
    //         console.log('Cannot load categories')
    // }).catch(error => {console.log(error)})

    return (
        <div className={'container'}>
            <IntroCapTitle capTitle={'Create new tour'}/>
            {/*Add:*/}
            {/*Category: ----                      Radio button or SWITCH*/}
            {/*Start dates:                        Date Picker*/}
            <TextInput
                id={'title'}
                name={'title'}
                label={'Enter the title ***'}
                placeholder={'Title:'}
                required={true}
            />
            <TextInput
                id={'duration'}
                name={'duration'}
                placeholder={'Duration:'}
                label={'Enter the duration ***'}
                required={true}
                type={'number'}
            />
            <TextInput
                id={'difficulty'}
                name={'difficulty'}
                placeholder={'Difficulty:'}
                label={'Enter the difficulty ***'}
                required={true}
            />


            <TextInput
                id={'rating'}
                name={'rating'}
                placeholder={'Rating: '}
                label={'Enter the rating'}
                type={'number'}
            />

            <TextArea
                id={'description'}
                name={'description'}
                placeholder={'Description: '}
                label={'Enter the description ***'}
            />

            <TextInput
                id={'max_group_size'}
                name={'max_group_size'}
                label={'Enter the maximum group size ***'}
                placeholder={'Maximum group size: '}
                required={true}
                type={'number'}
            />

            <TextInput
                id={'price'}
                name={'price'}
                label={'Enter the price ***'}
                placeholder={'Price: '}
                required={true}
                type={'number'}
            />

            <TextInput
                id={'discount'}
                name={'discount'}
                label={'Enter the discount'}
                placeholder={'Discount: '}
                type={'number'}
            />


            <ImageInput img_type={'Cover image'}/>
            <ImageInput img_type={'Images'}/>

        </div>
    )
}


export default CreateTourPage;