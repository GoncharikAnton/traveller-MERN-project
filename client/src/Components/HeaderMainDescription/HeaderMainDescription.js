import React from 'react'
import {Button} from "../Button/Button";
// import 'materialize-css';
import './HeaderMainDescription.css'

export const HeaderMainDescription = ({props}) => {
    // console.log(props)
    // const style = async () => {
    //     const main_img = await fetch('/static/img/nature/main.png')
    //     console.log(main_img)
    // }
    const style = {backgroundImage: 'url('+`${!props.author ? '/img/nature/main.png' : props.img}`+ ')'}
    return(
        <div className={'HeaderMainDescription container'}
            style={{
                backgroundImage: 'url(' + `${!props.author ? '/img/nature/main.jpg' : props.img}` + ')',

        }}
        >
            <ul>
                <li><h3>{props.title}</h3></li>
                <li><p>{props.description}</p></li>
                {props.author ? <>
                    <li><h5>{props.rating}</h5></li>
                    <li><h4>{props.author}</h4></li>
                </> : undefined}
                {!props.author && <li><Button description={'Learn More'} to={'/'}/></li>}
            </ul>

        </div>
    )
}