import {characters} from './characterInfo';
import React from 'react';
import JohnsJournal from './JohnsJournal';
import Layout from './Layout';
import { Link} from 'react-router-dom';

export default function Glossary(props){
    let typeData, baseLink;
    if (props.glossaryType === "characters"){
        typeData = characters;
        baseLink ="characters";
    }
    return (
        <Layout>
            <JohnsJournal prevPageLink={null} nextPageLink={props.nextLink}>
                <div className="left-page">
                    <div className="glossary-title">
                    <h2>{props.title}</h2>
                    </div>
                    <div className="glossary-image">
                        <img src={props.imgsrc} alt={props.title} />
                    </div>
                    <div className="glossary-description">
                        {props.description}
                    </div>
                </div>
                <div className="right-page">
                    <ul className="glossary-ul">
                        {typeData.map((item,index)=>(
                            <li key={index} className="glossary-li"><Link to={`/${baseLink}/${item.id}`}>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </JohnsJournal>
        </Layout>
    );
}