//this component makes the season titlecard previews, with next button going to season 1 summary page
import JohnsJournal from './JohnsJournal';
import Layout from './Layout';
import Season from './Season';
import { episodes } from './episodeInfo';
export default function Seasons(){
    return (
        <Layout>
            <JohnsJournal prevPageLink={null} nextPageLink="/seasons/1" >
                <div className="left-page">
                    <div className="seasons-title">
                        <h2>Season Selection Menu</h2>
                    </div>
                    <div className="seasons1">
                        {episodes.slice(0,8).map((ep)=>(
                            <Season seasonNumber={ep.title} imgsrc={ep.imgsrc} num={ep.num} />
                        ))}
                    </div>
                </div>
                <div className="right-page">
                    <div className="seasons2">
                        {episodes.slice(8,15).map((ep)=>(
                            <Season seasonNumber={ep.title} imgsrc={ep.imgsrc} num={ep.num}/>
                        ))}
                    </div>

                </div>
            </JohnsJournal>
        </Layout>
    )
}