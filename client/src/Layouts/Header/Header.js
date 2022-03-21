import React from 'react'
import {Navbar} from "../../Components/Navbar/Navbar";
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";

export const Header = ({props}) => {
    console.log('HEADER render')
    return (
        <header className={'Header'}>
            <Navbar/>
        </header>
    )
}
