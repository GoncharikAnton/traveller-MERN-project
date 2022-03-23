import React from 'react';
import styles from './DescriptionCardWhite.module.css';

export const DescriptionCardWhite = ({span_text, img}) => {


    return(
        <>
            <div className={`row ${styles.container_text}`}>
                <div className={`col s12 m7 l7 ${styles.container_text__text}`}>
                    <span>{span_text}</span>
                </div>
                <div className="col s12 m5 l5">
                    <img className={`${styles.img}`} src={img}/>
                </div>
            </div>

        </>
    )
}