import React from "react";
import { Link } from "react-router-dom";

export default function PageBtn({isBackwards, navLink}){
    if (!navLink) return null; //no link passed, don't have pageBtn element

    return (
        <div className="pagebtn-container">
            {isBackwards && <Link to={navLink} className="nav-backwards"><ion-icon name="arrow-back-outline"></ion-icon></Link>}
            {!isBackwards && <Link to={navLink} className="nav-forwards"><ion-icon name="arrow-forward-outline"></ion-icon></Link>}
        </div>
    );
}