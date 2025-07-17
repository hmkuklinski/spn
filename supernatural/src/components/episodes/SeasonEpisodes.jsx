import Episode from "./Episode.jsx";
import {episodes} from '../data/episodeInfo.js';
import PopUpInfo from "./PopUpInfo.jsx";
import { useState } from "react";

export default function SeasonEpisodes({seasonNumber, seasonDropdown}) {
    const numEps = episodes[seasonNumber].epInfo.length;
    const halfway = Math.ceil(numEps / 2);
    const left = episodes[seasonNumber].epInfo.slice(0, halfway);
    const right = episodes[seasonNumber].epInfo.slice(halfway);

    const [previewEp, setPreviewEp]= useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });


    const displayPreview = (e, ep, container) =>{
        const isMobile = window.innerWidth <= 768;
        const parent = !isMobile ? document.querySelector(".pages"): document.querySelector(container); 
        const popupWidth = 300;  
        const popupHeight = 400; 
        //get parent container
        const parentRect = parent.getBoundingClientRect();

        const clickX = window.innerWidth / 2;
        const clickY = isMobile? window.scrollY -100: e.pageY - 200;

        // determine where the popup's min/max x and y positions are to stay inside container
        const minX = parentRect.left + popupWidth / 2;
        const maxX = parentRect.right - popupWidth / 2;
        const minY = parentRect.top + popupHeight / 2;
        const maxY = parentRect.bottom - popupHeight / 2;

        // select their position
        const x = Math.min(Math.max(clickX, minX), maxX);
        const y = Math.min(Math.max(clickY, minY), maxY);

        //update the states to trigger different renderings
        setPopupPosition({ x, y });
        setPreviewEp(ep);
        setShowPreview(true);

        setTimeout(() => {
            document.querySelector(".episode-extra")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 0);
    }
    const closePreview = () =>{
        setPreviewEp(null);
        setShowPreview(false);
    }

    let epPreview= showPreview && previewEp? (
        <div 
            className="episode-extra"
            style={{
                position: "absolute",
                left: popupPosition.x,
                top: popupPosition.y,
                transform: "translateX(-50%)" 
            }}
        >
            <div className="preview-close">
                <button onClick={closePreview}>X</button>
            </div>
            <div className="episode-extra-container">
                <div className="preview-img">
                    <img src={previewEp.photo} alt={previewEp.title} />
                </div>
                <div className="preview-content">
                    <div className="ep-title-container">
                        <div className="episode-title" id="preview-title">
                            <h2><b>{previewEp.title}</b></h2>
                        </div>
                        <div className="ep-info">
                            {`Season ${seasonNumber+1} Episode ${previewEp.num}`}
                        </div>
                    </div>
                    <div className="episode-description">
                        <p>{previewEp.description}</p>
                    </div>
                    <div className="extra-content">
                        <PopUpInfo cat="Date Aired" ans={previewEp.aired} />
                        <PopUpInfo cat="Writers" ans={previewEp.writ} />
                        <PopUpInfo cat="Directors" ans={previewEp.dir} />
                    </div>
                </div>
            </div>
        </div>
    ): null;

    

    return (
        <div className="entire-container">
            {showPreview && epPreview}
            <div className="pages" style={{opacity:showPreview?"0.35":"1"}} >
                <div className="left-page" >
                    {seasonDropdown}
                    {left.map((ep) => (
                        <Episode key={ep.id} episode={ep} onClick={(e)=>displayPreview(e, ep, '.left-page')} />
                    ))}
                </div>
                <div className="right-page">
                    {right.map((ep) => (
                        <Episode key={ep.id} episode={ep} onClick={(e)=>displayPreview(e, ep, '.right-page')} />
                    ))}
                </div>
            </div>
        </div>
    );
}
