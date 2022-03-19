import React from 'react'
import {Navbar} from "../../Components/Navbar/Navbar";
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";

export const Header = ({props}) => {
    return (
        <div className={'Header'}>
            <Navbar/>
            <HeaderMainDescription props={props}/>
        </div>
    )
}
