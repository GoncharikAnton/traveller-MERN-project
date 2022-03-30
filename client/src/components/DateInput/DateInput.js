import React, {useEffect, useState} from 'react';
import M from 'materialize-css'

const Date_Input = ({setData, data = null}) => {

    const [value, setValue] = useState([])

    useEffect(() => {
        const elem = document.querySelector('.datepicker');
        const instance = window.M.Datepicker.init(elem, {
            autoClose: true, format: 'yyyy-mm-dd',
            onSelect: () => {
                return setValue([instance.toString()])
            }
        });
    }, [])

    useEffect(() => {
        return setData({...data, ["startDates"]: value})
    }, [value])


    return (
        <input
            onChange={(e) => {
                console.log(e.target.value)
            }}
            type="text" className="datepicker active" placeholder={'Enter the start date ***'} name={'startDates'}/>
    )
}

export const DateInput = React.memo(Date_Input);