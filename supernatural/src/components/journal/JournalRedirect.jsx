import {characters} from '../data/characterInfo';
import {Link} from "react-router-dom";
import JohnsJournal from "./JohnsJournal";
import GalleryImage from "./GalleryImage";
import { monsters } from "../data/monsterInfo";
import Layout from "../Layout";
import { episodes } from '../data/episodeInfo';
import { sigils } from '../data/sigilInfo';

export default function JournalRedirect(props){
    let rightPageContents, prevLink, redirectLink, redirectImage, redirectText;
    if (props.redirect=== "character"){
        const prevChar = characters[characters.length-1];
        prevLink = `/characters/${prevChar.id}`;
        redirectText = <p>Unfortunately that's all that John wrote here. If you still want to learn more, you can always review.</p>;
        redirectLink = <Link to="/characters">Start Over</Link>;
        redirectImage = <img src="/assets/redirects/characters/characterredirect.gif" alt="redirect"/>;
        rightPageContents = (
            <div className="gallery-redirect">
                <div className="redirect-block">
                    <div className="redirect-title">
                        <h2>Memories</h2>
                    </div>
                    <div className="redirect-quote">
                        <p>"Memories are the treasures that we keep locked deep within the storehouse of our souls to keep our hearts warm when we are lonely." - Becky Aligada</p>
                    </div>
                </div>
                <GalleryImage imgSrc="/assets/redirects/characters/credirect1.png" caption="First Kiss" isPortrait={false}/>
                <GalleryImage imgSrc="/assets/redirects/characters/credirect2.png" caption="Dean's 4th Birthday"isPortrait={false}/>
                <GalleryImage imgSrc="/assets/redirects/characters/credirect3.png" caption="First Date" isPortrait={true}/>
                <GalleryImage imgSrc="/assets/redirects/characters/credirect4.png" caption="Family 2019" isPortrait={false} />
            </div>
        );
    }
    else if(props.redirect === "thelore"){
        const prevMon = monsters[monsters.length-1];
        prevLink = `/monsters/${prevMon.id}`;
        redirectLink = <Link to="/monsters">Start Over</Link>;
        redirectText = <p>That's all the lore that John wrote in his journal. If you still want to learn more, you can always review what is written here, check the Men of Letters' Library, or ask a friend.</p>;
        redirectImage =  <img src="/assets/redirects/monsters/mredirect.gif" alt="redirect" width="100%" height="350px"/>;
        rightPageContents = (
            <div className="gallery-redirect">
                <GalleryImage imgSrc="/assets/redirects/monsters/mredirect1.png" caption="Jack Kline" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/monsters/mredirect2.png" caption="Bobby Singer and Castiel" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/monsters/mredirect3.png" caption="Wayward Sisters" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/monsters/mredirect4.png" caption="The Winchester Brothers" isPortrait={true} />
                <GalleryImage imgSrc="/assets/redirects/monsters/mredirect5.png" caption="Rowena" isPortrait={false} />
            </div>
        );
    }
    else if(props.redirect === "season"){
        const prevSeason = episodes[episodes.length-1];
        prevLink = `/seasons/${prevSeason.id}`;
        redirectLink = <Link to="/seasons">Start Over</Link>;
        redirectImage= <img src="/assets/redirects/seasons/seasonredirect.gif" alt="redirect" />;
        redirectText = <p>That's the end of the road. Maybe we should look back to see how far we've come!</p>;
        rightPageContents = (
            <div className="gallery-redirect">
                <GalleryImage imgSrc="/assets/redirects/seasons/seredirect1.png" caption="The Winchesters" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/seasons/seredirect2.png" caption="Psychic Sam" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/seasons/seredirect3.png" caption="Crowley and Castiel" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/seasons/seredirect4.png" caption="Demon!Dean" isPortrait={true} />
                <GalleryImage imgSrc="/assets/redirects/seasons/seredirect5.png" caption="Team Free Will" isPortrait={false} />
                
            </div>
        );
    }
    else if(props.redirect === "episodes"){
        const prevSeason = episodes[episodes.length-1];
        prevLink = `/episodes/seasons${prevSeason.id}`;
        redirectLink = <Link to="/episodes">Start Over</Link>;
        redirectImage= <img src="/assets/redirects/seasons/seasonredirect.gif" alt="redirect" />;
        redirectText = <p>That's the end of the road. Maybe we should look back to see how far we've come!</p>;
        rightPageContents = (
            <div className="gallery-redirect">
                <GalleryImage imgSrc="/assets/redirects/episodes/eredirect1.png" caption="Woman in White" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/episodes/eredirect2.png" caption="Supernatural: The Musical" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/episodes/eredirect3.png" caption="ScoobyNatural" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/episodes/eredirect4.png" caption="Charlie Returns" isPortrait={true} />
                <GalleryImage imgSrc="/assets/redirects/episodes/eredirect5.png" caption="The French Mistake" isPortrait={false} />
            </div>
        );
    }
    else if(props.redirect === "sigils"){
        const prevSigil = sigils[sigils.length-1];
        prevLink = `/sigils/${prevSigil.id}`;
        redirectLink = <Link to="/sigils">Start Over</Link>;
        redirectImage= <img src="https://i.pinimg.com/736x/2e/d2/15/2ed21577a58cf779925e54c3c2372722.jpg" alt="redirect" />;
        redirectText = <p>That's the end of the road.If you still want to learn more, you can always review what is written here, check the Men of Letters' Library, or see if there is anything in the Book of the Damned.</p>;
        rightPageContents = (
            <div className="gallery-redirect">
                <GalleryImage imgSrc="/assets/redirects/sigils/siredirect1.png" caption="Angel Banishing" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/sigils/siredirect2.png" caption="Angel Warding" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/sigils/siredirect3.png" caption="Angel Proofing" isPortrait={false} />
                <GalleryImage imgSrc="/assets/redirects/sigils/siredirect4.png" caption="Anti-Possession" isPortrait={true} />
                <GalleryImage imgSrc="/assets/redirects/sigils/siredirect5.png" caption="Devils Trap" isPortrait={false} />
            </div>
        );
    }
    let leftPageContents = (
            <div className="redirect">
                <div className="redirect-title">
                    <h2>The End of the Road</h2>
                </div>
                <div className="redirect-image">
                   {redirectImage}
                </div>
                <div className="redirect-content">
                    <div className="redirect-text">
                        {redirectText}
                    </div>
                    <div className="redirect-button">
                        <button className="basic-btn">
                            {redirectLink}                                
                        </button>
                    </div>

                </div>
            </div>
        );

        return (
            <Layout>
                <JohnsJournal prevPageLink={prevLink} nextPageLink={null}>
                        <div className="left-page">
                            {leftPageContents}
                        </div>
                        <div className="right-page">
                            {rightPageContents}
                        </div>
                </JohnsJournal>
            </Layout>
        );
}