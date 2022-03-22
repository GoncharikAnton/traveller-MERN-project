import React from 'react'
import {Button} from "../Button/Button";
import './HeaderMainDescription.css'

export const HeaderMainDescription = ({title, description, buttonDescription, to, rating= null,
                                          author= null,
                                          img= null}) => {
    // console.log("HERO render")
    const style = {backgroundImage: 'url('+`${!author ? '/img/nature/main.png' : img}`+ ')'}
    return(
        <div className={'HeaderMainDescription container'}
            style={{
                backgroundImage: 'url(' + `${!author ? '/img/nature/main.jpg' : img}` + ')',

        }}
        >
            <ul>
                <li><h3>{title}</h3></li>
                <li><p>{description}</p></li>
                {author ? <>
                    <li><h5>{rating}</h5></li>
                    <li><h4>{author}</h4></li>
                </> : undefined}
                {!author && <li><Button description={buttonDescription || 'Learn More'} to={to || '/'}/></li>}
            </ul>

        </div>
    )
}