import React from 'react';
import styles from './IntroCapTitle.module.css'

export const IntroCapTitle = ({capTitle}) => {
    console.log(capTitle)
    return (
        <div className={`${styles.IntroCapTitle}`}>
            <h3 className={`${styles.h3}`}><span className={`${styles.span}`}> {capTitle} </span></h3>
        </div>
    )
}
