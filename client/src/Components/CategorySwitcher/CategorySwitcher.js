import React, {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'
import {IntroCapTitle} from "../IntroCapTitle/IntroCapTitle";
import M from  'materialize-css/dist/js/materialize.min.js';

export const CategorySwitcher = ({tours = null, blogs = null, updateCategory , category}) => {

    M.AutoInit();

    const [categories, setCategories] = useState([])

    const getCategories = useCallback(async () => {
        try{
            const data = tours ? await tours : await blogs;
            for (let i = 0; i < data.length; i++) {
                categories.includes(data[i].category[0]) ? i++ :  setCategories([...categories, data[i].category[0]]);
            }
            return data
        }catch (e){}
    })

    useEffect(() => {getCategories()}, [getCategories])

    const active_link = 'waves-effect active cyan';
    const passive_link = 'waves-effect';

    return (
        <>
            <IntroCapTitle capTitle={tours ? 'Our tours' : "Traveller's Blog"}/>
            <div className="CategorySwitcher">
                <ul className="pagination">
                    {/*<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>*/}
                    {/*<li className="waves-effect active cyan"><a>{blogs.cat1.title}</a></li> //////////////*/}

                    {categories && categories.map((cat, ind) => {
                        return <li className="waves-effect" key={ind}
                                   onClick={(e) => {
                                       console.log(e.target.parentNode.previousSibling)
                                       e.target.className = active_link;
                                       return updateCategory(e.target.name)
                                   }}
                        >{cat}</li>
                    })}
                    <ul className="pagination">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a>
                        </li>
                    </ul>
                    {/*<li className="waves-effect"><a onClick={(e) => {*/}
                    {/*    console.log(blogs.cat2.title)*/}
                    {/*    return updateCategory(e.target.name)*/}
                    {/*}} name={blogs.cat2.title}>{blogs.cat2.title}</a></li>*/}

                    {/*<li className="waves-effect"><a >{blogs.cat3.title}</a></li> ///////////////////////*/}
                    {/*<li className="waves-effect "><a >{blogs.cat4.title}</a></li>  ///////////////////////*/}
                    {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
                </ul>
            </div>
        </>

    )
}