import Link from "next/link";
export default function SearchFailed({buttonText, buttonLink, message=null}){
    const closeSearchFailed=()=>{
        const warning = document.getElementById("warning");
        warning.style.display="none";
        document.getElementById("jj").style.opacity="1";
    }
    //no message passed? used default- otherwise, use passed message! :D
    const messageDiv = (!message)?(
        <div className="failed-description">
            <p>there was an error processing your request. please check your spelling.</p>
            <p>you can either close this message and use the arrows to flip through the journal or you can click this button to go to the character glossary.</p>
        </div>
    ): <div className="failed-description">{message}</div>;
    return (
        <div className="search-failed"id="warning">
            <div className="failed-close">
                <button className="close-btn" onClick={closeSearchFailed}>X</button>
            </div>
            <div className="failed-title">
                <h2>You Took a Wrong Turn</h2>
            </div>
            {messageDiv}
            <div className="failed-button">
                <button className="basic-btn"><Link href={buttonLink}>{buttonText}</Link></button>
            </div>
        </div>
    );
}