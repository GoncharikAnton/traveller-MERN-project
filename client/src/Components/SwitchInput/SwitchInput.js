import React from 'react'


const SwitchInput = ({categories}) => {

    return (

        <div className="input-field col s12">
            <select defaultValue="Choose your option" className="browser-default">
                <option  disabled selected>Choose your option</option>
                {categories.map((cat, ind) => {
                    return <option value={ind} key={cat._id}>{cat.name}</option>
                })}
            </select>
        </div>
    )
}

export default SwitchInput;