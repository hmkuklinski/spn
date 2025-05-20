import { Link } from "react-router-dom";
export default function SearchFailed({buttonText, buttonLink}){
    const closeSearchFailed=()=>{
        const warning = document.getElementById("warning");
        warning.style.display="none";
        document.getElementById("jj").style.opacity="1";
    }
    return (
        <div className="search-failed"id="warning">
            <div className="failed-close">
                <button className="close-btn" onClick={closeSearchFailed}>X</button>
            </div>
            <div className="failed-title">
                <h2>You Took a Wrong Turn</h2>
            </div>
            <div className="failed-description">
                <p>there was an error processing your request. please check your spelling.</p>

                <p>you can either close this message and use the arrows to flip through the journal or you can click this button to go to the character glossary.</p>
            </div>
            <div className="failed-button">
                <button className="basic-btn"><Link to={buttonLink}>{buttonText}</Link></button>
            </div>
        </div>
    );
}