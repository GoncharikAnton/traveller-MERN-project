import React from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'
import {IntroCapTitle} from "../IntroCapTitle/IntroCapTitle";

export const CategorySwitcher = ({props}) => {
    console.log(props)
    return (
        <>
            <IntroCapTitle capTitle={props.capTitle}/>
            <div className="CategorySwitcher">
                <ul className="pagination">
                    {/*<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>*/}
                    <li className="waves-effect active cyan"><a href={props.cat1.to}>{props.cat1.title}</a></li>
                    <li className="waves-effect"><a href={props.cat2.to}>{props.cat2.title}</a></li>
                    <li className="waves-effect"><a href={props.cat3.to}>{props.cat3.title}</a></li>
                    <li className="waves-effect "><a href={props.cat4.to}>{props.cat4.title}</a></li>
                    {/*<li className="waves-effect"><a href="#">Sky</a></li>*/}
                    {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
                </ul>
            </div>
        </>


    )
}