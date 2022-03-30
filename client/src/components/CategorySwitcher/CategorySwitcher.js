import React, {memo, useCallback, useEffect, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'
import {IntroCapTitle} from "../IntroCapTitle/IntroCapTitle";
import axios from "axios";

const Category_switcher = ({
                               updateCategory,
                               activeCategory = null,
                               rely = 'tours'
                           }) => {


    // console.log('rendered from category switcher')
    // console.log(updateCategory,
    //     activeCategory,
    //     rely)

    const [categories, setCategories] = useState(null)
    const [error, setError] = useState(null)


    const data = useCallback(async () => {
        try {
            const response = await axios.get(`/api/v1/category?rely=${rely}`, {})
            const data = await response.data
            if (data.status === 'success') {
                setCategories(data.data.categories)
            }
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        data()
        return () => {
        }
    }, [setCategories])


    const active_link = 'waves-effect active cyan';
    const passive_link = 'waves-effect';
    const capTitle = rely === 'tours' ? 'Our tours' : "Traveller's Blogs"
    return (
        <>
            <IntroCapTitle capTitle={capTitle}/>
            <div className="CategorySwitcher">
                <ul className="pagination">

                    {/*<li className="waves-effect active cyan"><a>{blogs.cat1.title}</a></li> //////////////*/}
                    {categories && categories.map((cat, ind) => {
                        return <li className={`${activeCategory === cat.name ? active_link :
                            passive_link}  hoverable`}
                                   key={cat._id}
                                   category={cat.name}
                                   onClick={(e) => {
                                       return updateCategory(e.target.attributes.getNamedItem("category").value)
                                   }}
                        >{cat.name}</li>
                    })}
                    {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
                </ul>
            </div>
        </>

    )
}

export const CategorySwitcher = memo(Category_switcher);