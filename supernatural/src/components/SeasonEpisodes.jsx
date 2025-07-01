import Episode from "./Episode";
import {episodes} from './episodeInfo.js';

export default function SeasonEpisodes({seasonNumber, seasonDropdown}) {
    const numEps = episodes[seasonNumber].epInfo.length;
    const halfway = Math.ceil(numEps / 2);
    const left = episodes[seasonNumber].epInfo.slice(0, halfway);
    const right = episodes[seasonNumber].epInfo.slice(halfway);
    

    return (
        <div className="pages">
            <div className="left-page">
                {seasonDropdown}
                {left.map((ep) => (
                    <Episode key={ep.id} {...ep} episodeNumber={ep.num} />
                ))}
            </div>
            <div className="right-page">
                {right.map((ep) => (
                    <Episode key={ep.id} {...ep} episodeNumber={ep.num} />
                ))}
            </div>
        </div>
    );
}
