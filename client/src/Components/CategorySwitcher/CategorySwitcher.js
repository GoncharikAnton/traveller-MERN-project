import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'
import {IntroCapTitle} from "../IntroCapTitle/IntroCapTitle";

export const CategorySwitcher = ({tours = null, blogs = null, updateCategory}) => {

    console.log('rendered from category switcher')

    const [categories, setCategories] = useState([])

    const getCategories = () => {
        const data = tours ? tours : blogs;
        const categor_arr = []
        for (let i = 0; i < data.length; i++) {
            categor_arr.includes(data[i].category) ? i++ : categor_arr.push(data[i].category)
        }
        return setCategories([...categor_arr])
    }

    useEffect(() => {getCategories()}, [tours, blogs])




    const active_link = 'waves-effect active cyan';
    const passive_link = 'waves-effect';


    const capTitle = useCallback(() => (tours ? 'Our tours' : "Traveller's Blog"), [tours])
    // console.log(categories)
    const title = React.useMemo(capTitle, [capTitle]);

    return (
        <>
            <IntroCapTitle capTitle={capTitle}/>
            <div className="CategorySwitcher">
                <ul className="pagination">

                    {/*<li className="waves-effect active cyan"><a>{blogs.cat1.title}</a></li> //////////////*/}

                    {categories && categories.map((cat, ind) => {
                        return <li className="waves-effect"
                                   key={ind}
                                   category={cat}
                                   onClick={(e) => {
                                       e.target.className = active_link;
                                       return updateCategory(e.target.attributes.getNamedItem("category").value)
                                       // return updateCategory('mountain')
                                   }}
                        >{cat}</li>
                    })}

                    {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
                </ul>
            </div>
        </>

    )
}