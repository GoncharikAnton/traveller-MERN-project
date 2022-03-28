import React, {useEffect, useState} from 'react';


const TextArea = ({placeholder, setData = null, id, name, label , data}) => {

    // const [value, setValue] = useState(null)

    useEffect(() => {
        window.M.updateTextFields()
    }, []);


    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s12">
                    <textarea onChange={(e) => {
                        // setValue(e.target.value)
                        setData({...data, [e.target.name] : e.target.value})
                    }}
                        id={id} name={name} className="materialize-textarea" placeholder={placeholder}/>
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        </div>
    )
}

export default TextArea;