import React, {useEffect, useState} from 'react';
import M from 'materialize-css'

const DateInput = ({setData, data = null}) => {

    // const [value, setValue] = useState(null)


    useEffect(() => {
        const elem = document.querySelector('.datepicker');
        const instance = window.M.Datepicker.init(elem, {autoClose : true, format: 'yyyy-mm-dd',
        onSelect: () => {
            setData({...data, ["startDates"] : instance.toString()})
            instance.destroy()
        }
        });
    }, [])



    return (
        <input
            type="text" className="datepicker active" placeholder={'Enter the start date ***'} name={'startDates'}/>
    )
}

export default DateInput;