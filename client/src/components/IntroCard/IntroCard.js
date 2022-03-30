import React from 'react'
import styles from './IntroCard.module.css'

const IntroCard = ({svg, cardTitle, cardDescription = null}) => {

    return(
        <div className={styles.IntroCard}>
            <img src={svg} alt="" className={styles.IntroCard_img}/>
            <p className={styles.IntroCard_title}>{cardTitle}</p>
            <p className={styles.IntroCard_description}>{cardDescription}</p>
        </div>
    )

}

export default IntroCard;