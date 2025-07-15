import { useState, useEffect } from "react";

export default function PodcastLanding({podcast}){
    const [isMobile, setIsMobile] = useState(false);

    //check if the user is on mobile:
    useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const podcastTitle = (
        <div className="podcast-title">
            <h2>{podcast.title}</h2>
        </div>
    );
    const podcastDesc = (
        <div className="podcast-description">
            {podcast.desc.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );

    const podcastSubtitle = (
        <div className="podcast-subtitle">
            <h5>Available on Apple Podcast and Spotify.</h5>
        </div>
    );
    
    const regStreaming = (
        <div className="podcast-streaming-links">
            {podcast.nowShowing.map((item)=>(
                <div className="podcast-streaming-container" onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}>
                    <div className="podcast-img" id={`${item.id}-img`}>
                        <img src={item.imgsrc} alt={item.id} className="icons"/>
                    </div>
                    <div className="platform-text">
                        {!isMobile && <div className="platform-desc"><h5>Listen On</h5></div>}
                        <div className="platform-name"> {item.id} </div>
                    </div>
                </div>
            ))}
        </div>
    );

    if(!isMobile){
        return (
            <div className="podcast-landing-container">
                    <div className="podcast-landing-info">
                        {podcastTitle}
                        {podcastDesc}
                        {podcastSubtitle}
                        {regStreaming}
                    </div>
                    
                </div>
        );
    }
    else{
        return (
            <div className="mobile-podcast">
                <div className="podcast-landing-container">
                    <div className="podcast-landing-info">
                        {podcastTitle}
                        {podcastDesc}
                        <div className="podcast-links">
                            {regStreaming}
                        </div>     
                    </div>
                </div>
            </div>
        );
    }
}