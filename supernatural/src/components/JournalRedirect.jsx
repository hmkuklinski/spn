import React from "react";
import {characters} from './characterInfo';
import {Link} from "react-router-dom";
import JohnsJournal from "./JohnsJournal";
import Layout from "./Layout";

export default function JournalRedirect(props){
    if (props.redirect=== "character"){
        const prevChar = characters[characters.length-1];
        const prevLink = `/characters/${prevChar.id}`;
        return (
            <Layout>
                <JohnsJournal prevPageLink={prevLink} nextPageLink={null}>
                        <div className="left-page">
                            <div className="redirect-title">
                                <h2>The End of the Road</h2>
                            </div>
                            <div className="redirect-image">
                                <img src="" alt="redirect"/>
                            </div>
                            <div className="redirect-content">
                                <div className="redirect-text">
                                    <p>Unfortunately that's all that John wrote here. If you still want to learn more, you can always review.</p>
                                </div>
                                <div className="redirect-button">
                                    <button className="basic-btn"><Link to="/characters">Go to Character Index</Link></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="right-page">
                            {/* this is going to be a couple pictures of the winchester boys */}
                        </div>
                </JohnsJournal>
            </Layout>
        );
    }
}