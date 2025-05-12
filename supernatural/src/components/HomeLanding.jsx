import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeLanding(){
    return (
        <div className="home-banner">
            <div className="impala">
                <img src="/assets/impala.png" alt="impala"></img>
            </div>
            <div className="information">
                <div className="info-banner">
                    <div className="page-logo">
                        <img src="/assets/spn-title.png" alt="supernatural"></img>
                    </div>
                    <div className="subtitle">
                        <h2>Saving People. Hunting Things. The Family Business.</h2>
                    </div>
                </div>
                <div className="text">
                    <p>Explore the world of the Supernatural with Sam and Dean Winchester as they travel across the country in their '67 impala, hunting monsters, demons, angels, and fighting their destiny. </p>
                </div>
                <div className="button-div">
                    <button className="basic-btn"><Link to="/episodes">Join the Hunt</Link></button>
                </div>
            </div>
        </div>
    );
}