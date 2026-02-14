import { useState} from 'react';
import Layout from '../Layout';
import JohnsJournal from '../journal/JohnsJournal';
import SearchFailed from '../searchbar/SearchFailed';
import SeasonEpisodes from './SeasonEpisodes';
import { episodes } from '../data/episodeInfo';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Episodes({ seasonId }) {
    const id= seasonId; //current id is :/season1, /season2, /season3, etc...
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false); 

    //parse the value here- get full id, remove the text, parse the int by 10 to get numerical value (base10)
    const seasonNum = parseInt(id.replace("season", ""), 10);
    //subtract one to get index value of current season:
    const currSeasonIndex = seasonNum - 1;

    //current season index value- invalid, out of range, not given.
    if (isNaN(currSeasonIndex) || currSeasonIndex < 0 || currSeasonIndex >= episodes.length) {
        return (
        <Layout>
            <SearchFailed buttonText="Glossary" buttonLink="/episodes" />
        </Layout>
        );
    }

    //determine previous and next links:
    const prevCh = currSeasonIndex > 0 ? episodes[currSeasonIndex - 1] : null;
    const nextCh = currSeasonIndex < episodes.length - 1 ? episodes[currSeasonIndex + 1] : null;

    //if valid prev/link, direct to that. otherwise, direct to glossary or redirect:
    const prevLink = prevCh ? `/episodes/season${prevCh.num}` : "/episodes";
    const nextLink = nextCh ? `/episodes/season${nextCh.num}` : "/episodes/redirect";

    //function to know state of whether the selection menu is open:
    const handleToggle = () => setIsOpen((prev) => !prev);

    //navigate to correct episodes page of desired selection:
    const handleSeasonSelect = (num) => {
        router.push(`/episodes/season${num}`);
        setIsOpen(false); //close it
    };

    //has the dropdown option to change display of selected season's episodes:
    const seasonDropdown = (
        <div className="season-selection">
            <button className="dropdown-button" onClick={handleToggle}>
                <span className="dropdown-text">Season {seasonNum}</span>
                <span className="dropdown-arrow"><ion-icon name="chevron-down-outline"></ion-icon></span>
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                {episodes.map((ep) => (
                    <li
                    key={ep.num}
                    className="dropdown-option"
                    onClick={() => handleSeasonSelect(ep.num)}
                    >
                    Season {ep.num}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );

    const homeBtn = (
        <Link href="/episodes" className="page-nav bottom-middle" aria-label="Next page">
            <ion-icon name="home-outline"></ion-icon>
        </Link>
    );

    return (
            <Layout>
                <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                    <SeasonEpisodes seasonNumber={currSeasonIndex} seasonDropdown={seasonDropdown} />
                    {homeBtn}
                </JohnsJournal>
            </Layout>
    );
}
