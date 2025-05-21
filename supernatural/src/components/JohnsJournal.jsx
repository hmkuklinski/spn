import React from "react";
import PageBtn from "./PageBtn";
import { Link } from "react-router-dom";

export default function JohnsJournal({prevPageLink, nextPageLink, children}){
    return (
        <div className="journal-container" id="jj">
            <div className="pages">
                <div className="return-glossary">
                </div>
                <PageBtn isBackwards={true} navLink={prevPageLink} />
                {children} 
                <PageBtn isBackwards={false} navLink={nextPageLink} />
            </div>
           
        </div>
    );
}