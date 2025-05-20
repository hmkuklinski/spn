import React from "react";
import PageBtn from "./PageBtn";

export default function JohnsJournal({prevPageLink, nextPageLink, children}){
    return (
        <div className="journal-container" id="jj">
            <div className="pages">
                <PageBtn isBackwards={true} navLink={prevPageLink} />
                {children} 
                <PageBtn isBackwards={false} navLink={nextPageLink} />
            </div>
           
        </div>
    );
}