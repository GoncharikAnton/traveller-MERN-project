import React from 'react';
import styles from './DescriptionCardCyan.module.css';

export const DescriptionCardCyan = ({span_text}) => {


    return(
        <>
            <div className={`row ${styles.container_text} cyan`}>
                <div className={`col s12 m5 l5`}>
                    <img className={`${styles.img}`} src="/img/nature/main.jpg"/>
                </div>
                <div className={`col s12 m7 l7 ${styles.container_text__text}`}>
                        <span>{span_text}</span>
                </div>
            </div>

        </>
    )
}