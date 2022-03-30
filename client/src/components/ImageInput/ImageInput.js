import React from 'react';


const ImageInput = ({img_type}) => {


    return (
        <div className="file-field input-field">
            <div className="btn">
                <span>{img_type}</span>
                <input type="file" multiple/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
            </div>
        </div>
)
}

export default ImageInput;