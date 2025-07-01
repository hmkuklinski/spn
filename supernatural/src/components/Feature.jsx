import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Feature({contentType, ...props}){
    const [isMobile, setIsMobile] = useState(false);

    //to check if screen is mobile:
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //these are different feature div items that are the same--> make constant
    const featureTitle = (
        <div className="feature-title">
            <h2>{props.feature}</h2>
        </div>
    );
    const featureImage= (
        <div className="feature-image">
            {(contentType === "monster" || contentType === "character") &&<img src={props.imgsrc} alt="featured item"></img>}
            {contentType==="episode" &&<img src={props.photo} alt="featured item"></img>}
        </div>
    );

    const featureSubtitle = (
        <div className="feature-subtitle">
            <h2>
                {(contentType === "monster" || contentType === "character") && props.name}                        
                {contentType === "character" && props.type && ` (${props.type})`}
                {contentType === "episode" && `${props.id}: ${props.title}`}
            </h2>
        </div>
    );

    const featureDescription = (
        <div className="feature-description">
            <p>{props.description}</p>
        </div>
    );

    const featureButton = (
        <div className="feature-button">
            <button className="basic-btn">
                <Link to={props.link}>{props.linkText}</Link>
            </button>
        </div>
    );


    //arrange layout based on whether the user is on mobile or not:
    if (!isMobile){
        return (
            <div className="feature-container">
                {featureTitle}
                {featureImage}
                <div className="feature-content">
                   {featureSubtitle}
                    {featureDescription}
                </div>
                {featureButton}
            </div>
        );
    }
    else{
        return (
            <div className="feature-container">
                {featureTitle}
                <div className="feature-content">
                    {featureImage}
                        {featureSubtitle}
                        {featureDescription}
                        {featureButton}
                    </div>
                    
                </div>
        );
    }
}