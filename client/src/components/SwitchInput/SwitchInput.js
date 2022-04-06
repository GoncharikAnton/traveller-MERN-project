import React from 'react'


const SwitchInput = ({categories, setData, data, switch_value = 'Choose category'}) => {


    return (

        <div className="input-field col s12">
            <select onChange={(e)=> (setData({...data, ['category']: e.target.value}))}
                    defaultValue={switch_value}
                    className="browser-default"
                    placeholder={'Choose a category'}
            >
                <option disabled >{switch_value || 'Choose a category'}</option>
                {categories.map((cat, ind) => {
                    return <option  value={cat.name} key={cat._id}>{cat.name}</option>
                })}
            </select>
        </div>

    )
}

export default SwitchInput;