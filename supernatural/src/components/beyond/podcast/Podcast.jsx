import Layout from '../../Layout';
import PodcastLanding from './landing/PodcastLanding';
import PodcastPreviews from './playlist/PodcastPreviews';
import PodcastStats from './about/PodcastStats';
import PodcastLongStats from './stats/PodcastLongStats';
import PodcastHosts from './hosts/PodcastHosts';
import Production from './production/Production';
import { spnPodcast } from '../../data/podcastInfo';

export default function Podcast(){
    const myPod = spnPodcast[0];
    const prod = spnPodcast[0].production[0];
    return (
        <Layout>
            <div className="main-container">
                <PodcastLanding podcast={myPod} />
                <PodcastPreviews podcast={myPod} />
                <PodcastStats {...myPod} />
                {/* <Production {...myPod} /> */}
                <PodcastLongStats {...myPod} />
                <PodcastHosts {...myPod} />
                <Production {...prod} />
            </div>
        </Layout>);
}