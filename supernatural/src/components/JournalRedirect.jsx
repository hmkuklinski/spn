import React from "react";
import {characters} from './characterInfo';
import {Link} from "react-router-dom";
import JohnsJournal from "./JohnsJournal";
import GalleryImage from "./GalleryImage";
import Search from "./Search";
import Layout from "./Layout";

export default function JournalRedirect(props){
    if (props.redirect=== "character"){
        const prevChar = characters[characters.length-1];
        const prevLink = `/characters/${prevChar.id}`;
        return (
            <Layout>
                <JohnsJournal prevPageLink={prevLink} nextPageLink={null}>
                        <div className="left-page">
                            <div className="redirect">
                                <div className="redirect-title">
                                    <h2>The End of the Road</h2>
                                </div>
                                <div className="redirect-image">
                                    <img src="https://25.media.tumblr.com/1980c3f7e3ffa4d94bf272615452a1e5/tumblr_mvcglzQN3U1sypyz3o1_500.gif" alt="redirect"/>
                                </div>
                                <div className="redirect-content">
                                    <div className="redirect-text">
                                        <p>Unfortunately that's all that John wrote here. If you still want to learn more, you can always review.</p>
                                    </div>
                                    <div className="redirect-button">
                                        <button className="basic-btn"><Link to="/characters">Start Over</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-page">
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
                        </div>
                </JohnsJournal>
            </Layout>
        );
    }
}