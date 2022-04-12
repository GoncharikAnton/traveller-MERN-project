import React from 'react'
import styles from './TextInput.module.css'
const _ = require("lodash")

const Text_Input = ({placeholder, setData = null, id, name, type = 'text', label, data = null, text_value = ''}) => {


    // useEffect(() => {
    //     window.M.updateTextFields()
    // }, []);

    const debounced_fun = _.debounce(function (data){
        setData(data)
    }, 500)

    return (
        <>
            <div className="row">
                <div className={`input-field col s12 m8 l8 ${styles.input_field_div} validate`}>
                    <input required validate
                        onChange={(e) => {
                            // setValue(e.target.value)
                            debounced_fun({...data, [e.target.name]: e.target.value})
                            // setData({...data, [e.target.name]: e.target.value})
                        }}
                        defaultValue={text_value} id={id} name={name} type={type}
                        className={`${styles.input_field} validate`}
                        placeholder={placeholder}/>
                    <label className="active" htmlFor={id}>{label}</label>
                </div>
            </div>
        </>
    )
}

export const TextInput = React.memo(Text_Input);