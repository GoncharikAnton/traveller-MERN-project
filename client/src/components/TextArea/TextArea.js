import React, {useEffect} from 'react';
import styles from './TextArea.module.css'

const TextArea = ({placeholder, setData = null, id, name, label, data, area_value = ''}) => {

    useEffect(() => {
        window.M.updateTextFields()
    }, []);


    return (
        <div className="row">
            <div className="row">
                <div className={`input-field col s12 ${styles.area_div}`}>
                    <textarea onChange={(e) => {
                        // setValue(e.target.value)
                        setData({...data, [e.target.name]: e.target.value})
                    }}
                              defaultValue={area_value}
                              id={id}
                              name={name}
                              className={`materialize-textarea ${styles.area_field}`}
                              placeholder={placeholder}/>
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        </div>
    )
}

export default TextArea;