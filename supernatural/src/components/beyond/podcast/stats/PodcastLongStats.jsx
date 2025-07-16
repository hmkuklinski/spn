import InfoDiv from "../../../InfoDiv";
import {useState, useEffect} from "react";

export default function PodcastLongStats(props){

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const statTitle = (
        <div className="stats-title">
            <h2>Podcast Stats</h2>
        </div>
    );

    const statsMobile = (
        <div className="stats-info">
            {props.stats.slice(0,3).map((stat)=>(
                <div className="stat-individual">
                    <InfoDiv title={stat.title} text={stat.stat} infoType={stat.infoType} />
                </div>
            ))}
        </div>
    );

    const statsNormal = (
         <div className="stats-info">
            {props.stats.map((stat)=>(
                <div className="stat-individual">
                    <InfoDiv title={stat.title} text={stat.stat} infoType={stat.infoType} />
                </div>
            ))}
        </div>
    );

    
    if (!isMobile){
        return (
            <div className="podcast-long-stats">
                {statTitle}
                {statsNormal}
            </div>
        );
    }
    else{
         return (
            <div className="podcast-long-stats">
                {statTitle}
                {statsMobile}
            </div>
        );
    }
}