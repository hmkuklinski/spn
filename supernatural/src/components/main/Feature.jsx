import {useState, useEffect} from "react";
import Link from "next/link";

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

    const defaultLinks = {
        monster: "/monsters",
        character: "/characters",
        episode: "/episodes",
        sigil: "/sigils",
    };

    const featureButton = (
        <div className="feature-button">
            <Link href={props.link || defaultLinks[contentType]}>
                <button className="basic-btn">{props.linkText || "Learn More"}</button>
            </Link>
        </div>

    );


    // const featureButton = (
    //     <div className="feature-button">
    //     {props.link ? (
    //         <Link href={props.link} className="basic-btn">
    //         {props.linkText || "Learn More"}
    //         </Link>
    //     ) : (
    //         <button className="basic-btn" disabled>
    //         {props.linkText || "No Link"}
    //         </button>
    //     )}
    //     </div>
    // );

    

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