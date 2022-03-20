import React from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'
import {IntroCapTitle} from "../IntroCapTitle/IntroCapTitle";

export const CategorySwitcher = ({blogs, updateCategory , category}) => {


    return (
        <>
            <IntroCapTitle capTitle={blogs.capTitle}/>
            <div className="CategorySwitcher">
                <ul className="pagination">
                    {/*<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>*/}
                    <li className="waves-effect active cyan"><a>{blogs.cat1.title}</a></li>

                    <li className="waves-effect"><a onClick={(e) => {
                        console.log(blogs.cat2.title)
                        return updateCategory(e.target.name)
                    }} name={blogs.cat2.title}>{blogs.cat2.title}</a></li>

                    <li className="waves-effect"><a >{blogs.cat3.title}</a></li>
                    <li className="waves-effect "><a >{blogs.cat4.title}</a></li>
                    {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
                </ul>
            </div>
        </>


    )
}