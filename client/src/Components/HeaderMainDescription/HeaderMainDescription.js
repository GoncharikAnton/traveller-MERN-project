import React from 'react'
import Button from "../Button/Button";
import './HeaderMainDescription.css'
import {starCalculator} from "../../DataMining/shortScripts/shortDescriptionCalc";

const HeaderMainDescription = ({title, button = true, description, buttonDescription, to = null, rating= null,
                                          author= null,
                                          img= null }) => {
    // console.log("HERO render")
    const style = {backgroundImage: 'url('+`${!author && !img ? '/img/nature/main.jpg' : img}`+ ')'

    }

    const star_rating = starCalculator(rating)

    return(
        <div className={'HeaderMainDescription container'}
            style={style}
        >
            <ul>
                <li><h3>{title}</h3></li>
                <li><p>{description}</p></li>
                {rating && <li><h5>Rating of the tour: <i className="material-icons cyan-text">{star_rating}</i>({rating})</h5></li>}
                {author ? <>
                    <li><h4>{author}</h4></li>
                </> : undefined}
                {!author && button && <li><Button description={buttonDescription || 'Learn More'} to={to || '/'}/></li>}
            </ul>

        </div>
    )
}

export default HeaderMainDescription;