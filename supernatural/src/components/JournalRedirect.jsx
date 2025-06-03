import {characters} from './characterInfo';
import {Link} from "react-router-dom";
import JohnsJournal from "./JohnsJournal";
import GalleryImage from "./GalleryImage";
import { monsters } from "./monsterInfo";
import Layout from "./Layout";
import { episodes } from './episodeInfo';

export default function JournalRedirect(props){
    let rightPageContents, prevLink, redirectLink, redirectImage, redirectText;
    if (props.redirect=== "character"){
        const prevChar = characters[characters.length-1];
        prevLink = `/characters/${prevChar.id}`;
        redirectText = <p>Unfortunately that's all that John wrote here. If you still want to learn more, you can always review.</p>;
        redirectLink = <Link to="/characters">Start Over</Link>;
        redirectImage = <img src="/assets/redirects/characterredirect.gif" alt="redirect"/>;
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
                <GalleryImage imgSrc="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/john-and-mary-winchester-kissing-in-the-cws-supernatural.jpg" caption="First Kiss" isPortrait={false}/>
                <GalleryImage imgSrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/Supernatural-Pilot--The-Winchesters.jpg" caption="Dean's 4th Birthday"isPortrait={false}/>
                <GalleryImage imgSrc="https://i.pinimg.com/736x/d9/85/e1/d985e1e9b769958eae5167848dd17e35.jpg" caption="First Date" isPortrait={true}/>
                {/* <GalleryImage imgSrc="https://www.metacritic.com/a/img/resize/8e44d9dabaa09a97e0f2388af40101c904140e8e/hub/2022/05/25/57c6b624-17eb-4361-9f01-30436917f267/sn1413d-0028b.jpg?auto=webp&width=1092" caption="Reunited" isPortrait={false} /> */}
                <GalleryImage imgSrc="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Supernatural-Backstage-Featured.png" caption="Family 2019" isPortrait={false} />
            </div>
        );
    }
    else if(props.redirect === "thelore"){
        const prevMon = monsters[monsters.length-1];
        prevLink = `/monsters/${prevMon.id}`;
        redirectLink = <Link to="/monsters">Start Over</Link>;
        redirectText = <p>That's all the lore that John wrote in his journal. If you still want to learn more, you can always review what is written here or check the Men of Letters' Library.</p>;
        redirectImage =  <img src="/assets/redirects/monsterredirect.gif" alt="redirect" width="100%" height="350px"/>;
        rightPageContents = (
            <div className="stats">
                <div className="stats-monsters">
                    <div className="stats-title">
                        <h2>Monster Count</h2>
                    </div>
                    <div className="stats-description">
                        <p>Number of times each monster type appears in the show.</p>
                    </div>
                    <div className="stats-graph">
                        <p>The graph will be here.</p>
                    </div>
                </div>
                <div className="stats-weapons">
                    <div className="stats-title">
                        <h2>Weapon Count</h2>
                    </div>
                    <div className="stats-description">
                        <p>Most popular method of killing monsters in the series.</p>
                    </div>
                    <div className="stats-graph">
                        <p>The graph will be here.</p>
                    </div>
                </div>
            </div>
        );
    }
    else if(props.redirect === "season"){
        const prevSeason = episodes[episodes.length-1];
        prevLink = `/seasons/${prevSeason.id}`;
        redirectLink = <Link to="/seasons">Start Over</Link>;
        redirectImage= <img src="/assets/redirects/seasonredirect.gif" alt="redirect" />;
        redirectText = <p></p>;
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