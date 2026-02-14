//this component allows for the navigation between pages once user reaches seasons/1 through seasons/15
import SeasonInfo from './SeasonInfo';
import JohnsJournal from '../journal/JohnsJournal';
import Layout from '../Layout';
import { episodes } from '../data/episodeInfo';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function SeasonRouting({ seasonId }) {
    const num = seasonId;
    const router = useRouter();

    // Convert route param from string to integer, adjust to 0-based index
    const seasonNum = parseInt(num) - 1;

    // If invalid season (non-number or out of bounds), redirect to main seasons page
    if (isNaN(seasonNum) || seasonNum < 0 || seasonNum >= episodes.length) {
        router.push("/seasons");
        return null;
    }

    // prevLink should be /seasons if it's the first season, otherwise decrement
    const prevLink = seasonNum === 0 ? "/seasons" : `/seasons/${seasonNum}`;
    
    // nextLink should increment (back to 1-based for URL)
    const nextLink = seasonNum < episodes.length - 1 
        ? `/seasons/${seasonNum + 2}` 
        : "/seasons/redirect";

    const homeBtn = (
        <Link href="/seasons" className="page-nav bottom-middle" aria-label="Next page">
            <ion-icon name="home-outline"></ion-icon>
        </Link>
    );
    return (
        <Layout>
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <SeasonInfo num={seasonNum} />
                {homeBtn}
            </JohnsJournal>
        </Layout>
    );
}
