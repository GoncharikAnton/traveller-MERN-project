import React from 'react';


const TextArea = ({placeholder, setData = null, id, name, label}) => {

    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s12">
                    <textarea id={id} name={name} className="materialize-textarea" placeholder={placeholder}/>
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        </div>
    )
}

export default TextArea;