import HomeLanding from './HomeLanding';
import Layout from '../Layout';
import Features from './Features';
import SectionDesc from './SectionDesc';
import { sections } from '../data/sectionInfo';
export default function Home(){
    return (
    <Layout>
        <div className="main-container">
            <HomeLanding />
            <Features />
            {/* <SectionDesc {...sections[0]} /> */}
        </div>
    </Layout>
    );
}