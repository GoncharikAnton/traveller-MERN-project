import React, {useEffect} from 'react';
import styles from './TextArea.module.css'
const _ = require("lodash")

const TextArea = ({placeholder, setData = null, id, name, label, data, area_value = ''}) => {

    useEffect(() => {
        window.M.updateTextFields()
    }, []);

    const debounced_fun = _.debounce(function (data){
        setData(data)
    }, 2500)

    return (
        <div className="row">
            <div className="row">
                <div className={`input-field col s12 ${styles.area_div}`}>
                    <textarea onChange={(e) => {
                        // setValue(e.target.value)
                        debounced_fun({...data, [e.target.name]: e.target.value})
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