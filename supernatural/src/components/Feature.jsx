import React from "react";
import {Link} from "react-router-dom";

export default function Feature({contentType, ...props}){

    return (
        <div className="feature-container">
            <div className="feature-title">
                <h2>{props.feature}</h2>
            </div>
            <div className="feature-image">
                {(contentType === "monster" || contentType === "character") &&<img src={props.imgsrc} alt="featured item photo"></img>}
                {contentType==="episode" &&<img src={props.photo} alt="featured item photo"></img>}
            </div>
            <div className="feature-content">
                <div className="feature-subtitle">
                    <h2>
                        {(contentType === "monster" || contentType === "character") && props.name}                        
                        {contentType === "character" && props.type && ` (${props.type})`}
                        {contentType === "episode" && `${props.id}: ${props.title}`}


                    </h2>
                </div>
                <div className="feature-description">
                     <p>{props.description}</p>
                </div>
            </div>
            <div className="feature-button">
                    <button className="basic-btn">
                        <Link to={props.link}>{props.linkText}</Link>
                    </button>
                </div>
        </div>
    );
    
}