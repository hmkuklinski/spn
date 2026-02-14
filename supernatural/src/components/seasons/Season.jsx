//This component is used for the season cards and routing to the appropriate season summary page
import { useRouter } from "next/router";
export default function Season({ seasonNumber, imgsrc, num, isEpisodes}) {
    const router = useRouter();

    const handleClick = () => {
        
        if(isEpisodes){
            router.push(`/episodes/season${num}`);

        }
        else{
            router.push(`/seasons/${num}`);
        }
    };
    return (
        <div className="season-container" onClick={handleClick}>
            <div className="season-titlecard">
                <img src={imgsrc} alt={`season ${seasonNumber}`} />
            </div>
            <div className="season-text">
                <h4>{seasonNumber}</h4>
            </div>
        </div>
    );
}