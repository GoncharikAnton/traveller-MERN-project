import React, {useEffect, useState} from 'react'


const SwitchInput = ({categories, setData, data}) => {


    return (

        <div className="input-field col s12">
            <select onChange={(e)=> (setData({...data, ['category']: e.target.value}))}
                    defaultValue="Choose category"
                    className="browser-default">
                <option disabled >Choose category</option>
                {categories.map((cat, ind) => {
                    return <option  value={cat.name} key={cat._id}>{cat.name}</option>
                })}
            </select>
        </div>

    )
}

export default SwitchInput;