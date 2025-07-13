//this component makes the season titlecard previews, with next button going to season 1 summary page
import JohnsJournal from '../journal/JohnsJournal';
import Layout from '../Layout';
import Season from './Season';
import { episodes } from '../data/episodeInfo';
import {useState, useEffect} from "react";

export default function Seasons({isEpisodes=null}){
    let nextPageLink = isEpisodes===null?"/seasons/1":"/episodes/season1";

    //to check if user is currently on mobile setup:
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //conditional render based on whether its for episodes or seasons component
    let seasonDescription = (
        <div className="seasons-description">
            {isEpisodes === true && <p>Click on a season titlecard to view the entire episode list for that season!</p>}
            {(isEpisodes === null || isEpisodes === false) && <p>Click on a season titlecard to learn general information about that season! </p>}
        </div>
    );

    let seasonsTitle = (
        <div className="seasons-title">
            <h2>Select the Season</h2>
        </div>
    );

    //if not on mobile: split episodes into left and right pages
    if (!isMobile){
        return (
            <Layout>
                <JohnsJournal prevPageLink={null} nextPageLink={nextPageLink} hasHome={true} homeLink="/seasons">
                    <div className="left-page">
                        {seasonsTitle}
                        <div className="seasons1">
                            {episodes.slice(0,8).map((ep)=>(
                                <Season seasonNumber={ep.title} imgsrc={ep.imgsrc} num={ep.num} isEpisodes={isEpisodes}/>
                            ))}
                        </div>
                    </div>
                    <div className="right-page">
                         {seasonDescription}
                        <div className="seasons2">
                            {episodes.slice(8,15).map((ep)=>(
                                <Season seasonNumber={ep.title} imgsrc={ep.imgsrc} num={ep.num} isEpisodes={isEpisodes}/>
                            ))}
                        </div>

                    </div>
                </JohnsJournal>
            </Layout>
        );
    }
    //map all episodes:
    else{
        return (
            <Layout>
                <div className="seasons-mobile">
                    {seasonsTitle}
                    {seasonDescription}
                    <div className="seasons">
                        {episodes.map((ep)=>(
                            <Season seasonNumber={ep.title} imgsrc={ep.imgsrc} num={ep.num} isEpisodes={isEpisodes}/>
                        ))}
                    </div>
                </div>
            </Layout>
        );
    }
}