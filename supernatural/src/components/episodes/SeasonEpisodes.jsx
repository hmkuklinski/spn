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
    // const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });


    const displayPreview = (e, ep) => {
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
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10
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
                        <Episode key={ep.id} episode={ep} onClick={(e)=>displayPreview(e, ep)} />
                    ))}
                </div>
                <div className="right-page">
                    {right.map((ep) => (
                        <Episode key={ep.id} episode={ep} onClick={(e)=>displayPreview(e, ep)} />
                    ))}
                </div>
            </div>
        </div>
    );
}
