import React from 'react'
import styles from './TextInput.module.css'

const Text_Input = ({placeholder, setData = null, id, name, type = 'text', label, data = null, text_value = ''}) => {


    // useEffect(() => {
    //     window.M.updateTextFields()
    // }, []);

    return (
        <>
            <div className="row">
                <div className={`input-field col s12 m8 l8 ${styles.input_field_div}`}>
                    <input
                        onChange={(e) => {
                            // setValue(e.target.value)
                            setData({...data, [e.target.name]: e.target.value})
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