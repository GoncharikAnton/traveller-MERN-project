import React, {useEffect} from 'react'

const TextInput = ({placeholder, setData = null, id, name, type = 'text', label}) => {

    useEffect(() => {
        window.M.updateTextFields()
    }, []);

    return(
        <>
            <div className="row">
                <div className="input-field col s12 m12 l12">
                    <input value="" id={id} name={name} type="text" className="validate" placeholder={placeholder}/>
                        <label className="active" htmlFor={id}>{label}</label>
                </div>
            </div>
        </>
    )
}

export default TextInput;