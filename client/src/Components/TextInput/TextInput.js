import React, {useEffect, useState} from 'react'

const Text_Input = ({placeholder, setData = null, id, name, type = 'text', label, data = null}) => {

    // const [value, setValue] = useState(null)

    useEffect(() => {
        window.M.updateTextFields()
    }, []);

    return(
        <>
            <div className="row">
                <div className="input-field col s12 m12 l12">
                    <input onChange={(e) => {
                        // setValue(e.target.value)
                        setData({...data, [e.target.name] : e.target.value})
                    }}
                        defaultValue={''} id={id} name={name} type={type} className="validate" placeholder={placeholder}/>
                        <label className="active" htmlFor={id}>{label}</label>
                </div>
            </div>
        </>
    )
}

export const TextInput = React.memo(Text_Input);