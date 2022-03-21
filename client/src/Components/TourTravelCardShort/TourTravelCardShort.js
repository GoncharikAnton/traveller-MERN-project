import React, {useEffect} from 'react';
import styles from './TravelCardShort.module.css'


export const TourTravelCardShort = ({tourCategory, tour}) => {

    console.log('rendered')



    return (
        <div className={`row ${styles.cards}`}>
            <div className="col s12 m12 l12">
                <div className="card medium">
                    <div className="card-image">
                        <img src="/img/nature/main.jpg"/>
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light cyan"><i
                            className="material-icons"/></a>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient
                            because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}