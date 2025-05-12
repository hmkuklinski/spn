import React from "react";
import Link from "react-router-dom";

export default function Feature(props){
    return (
        <div className="feature-container">
            <div className="feature-title">
                <h2>Featured {props.feature}</h2>
            </div>
            <div className="feature-image">
                <img src={props.imgsrc} alt="featured image"></img>
            </div>
            <div className="feature-subtitle">
                <h3>{props.subtitle}</h3>
            </div>
            <div className="feature-description">
                <p>{props.description}</p>
            </div>
            <div className="feature-button">
                <button class="basic-btn">
                    <Link to={props.link}>{props.linkText}</Link>
                </button>
            </div>
        </div>
    );
}