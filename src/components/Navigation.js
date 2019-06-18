import React from 'react'

import { NavLink } from 'react-router-dom';

const navigation = (props) => {
    return (
    <ul className="side-nav">
        <li className={props.class} onClick={props.click}>
            <NavLink to={props.navTo} className={props.linkClass} >{props.navName}</NavLink>
        </li>
    </ul>
    )
};

export default navigation;