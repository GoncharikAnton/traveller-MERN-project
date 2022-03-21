import React, {useCallback, useEffect, useState} from 'react';
import styles from './IntroCapTitle.module.css'

export const IntroCapTitle = ({capTitle}) => {
    console.log('rendered from !!!!!!!!!!!!!!!TITLE!!!!!!!!!')

    // const [title, setTitle] = useState('');
    // //
    // useEffect(() => {
    //     setTitle(capTitle)
    // }, [capTitle])
    const title = React.useMemo(capTitle, [capTitle]);


    return (
        <div className={`${styles.IntroCapTitle}`}>
            <h3 className={`${styles.h3}`}><span className={`${styles.span}`}> {title} </span></h3>
        </div>
    )
}
