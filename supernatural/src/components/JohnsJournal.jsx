import { Link } from "react-router-dom";

export default function JohnsJournal({prevPageLink, nextPageLink, children}){
    return (
        <div className="journal-container" id="jj">
            <div className="pages">
                <div className="return-glossary">
                </div>
                {prevPageLink && (
                    <Link to={prevPageLink} className="page-nav bottom-left" aria-label="Previous page">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </Link>
                )}
                {/* <PageBtn isBackwards={true} navLink={prevPageLink} /> */}
                {children} 
                {nextPageLink && (
                    <Link to={nextPageLink} className="page-nav bottom-right" aria-label="Next page">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>
                )}
                {/* <PageBtn isBackwards={false} navLink={nextPageLink} /> */}
            </div>
           
        </div>
    );
}