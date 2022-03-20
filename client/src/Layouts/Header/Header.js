import React from 'react'
import {Navbar} from "../../Components/Navbar/Navbar";
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";

export const Header = ({props}) => {
    return (
        <header className={'Header'}>
            <Navbar/>
            <HeaderMainDescription props={props}/>
        </header>
    )
}
