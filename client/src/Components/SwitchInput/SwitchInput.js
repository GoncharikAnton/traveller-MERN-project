import React from 'react'


const SwitchInput = () => {



    return (
        <div className="input-field col s12">
            <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
        </div>
    )
}

export default SwitchInput;