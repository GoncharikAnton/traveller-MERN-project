import React from 'react';
import styles from './DropDownMenu.module.css'
import M from '../../../node_modules/materialize-css/dist/js/materialize.js'
export const DropDownMenu = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {inDuration: 100});
    });

    return (
        <>
            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul>
        </>

)
}