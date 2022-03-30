import React, {useCallback, useEffect, useState} from 'react';
import styles from './IntroCapTitle.module.css'

const Intro_CapTitle = ({capTitle}) => {

    // console.log('rendered from !!!!!!!!!!!!!!!TITLE!!!!!!!!!')

    return (
        <div className={`${styles.IntroCapTitle}`}>
            <h3 className={`${styles.h3}`}><span className={`${styles.span}`}> {capTitle} </span></h3>
        </div>
    )
}

export const IntroCapTitle = React.memo(Intro_CapTitle);