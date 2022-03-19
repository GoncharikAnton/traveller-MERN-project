import React from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css'
import './CategorySwitcher.css'

export const CategorySwitcher = () => {
    return (
        <div className="CategorySwitcher">
            <h3><span> Categories </span></h3>
            <ul className="pagination">
                {/*<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>*/}
                <li className="waves-effect active cyan"><a href="#!">Mountains</a></li>
                <li className="waves-effect"><a href="#">Ocean</a></li>
                <li className="waves-effect"><a href="#">Forest</a></li>
                <li className="waves-effect "><a href="#">City</a></li>
                <li className="waves-effect"><a href="#">Sky</a></li>
                {/*<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>*/}
            </ul>
        </div>

    )
}