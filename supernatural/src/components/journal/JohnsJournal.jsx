import Link from "next/link";

export default function JohnsJournal({prevPageLink, nextPageLink, children}){
    return (
        <div className="journal-container" id="jj">
            <div className="pages">
                <div className="return-glossary">
                </div>
                {prevPageLink && (
                    <Link href={prevPageLink} className="page-nav bottom-left" aria-label="Previous page"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </Link>
                )}
                {children} 

                {nextPageLink && (
                    <Link href={nextPageLink} className="page-nav bottom-right" aria-label="Next page"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>
                )}
            </div>
           
        </div>
    );
}