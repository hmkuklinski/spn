import Layout from '../../Layout';
import PodcastLanding from './PodcastLanding';
// import PodcastPreviews from './PodcastPreviews';
import { spnPodcast } from '../../data/podcastInfo';

export default function Podcast(){
    const myPod = spnPodcast[0];
    return (
        <Layout>
            <div className="main-container">
                <PodcastLanding podcast={myPod} />
                {/* <PodcastPreviews podcast={myPod} /> */}
            </div>
        </Layout>);
}