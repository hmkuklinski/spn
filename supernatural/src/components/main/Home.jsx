import HomeLanding from './HomeLanding';
import Layout from '../Layout';
import Features from './Features';
import MySections from './MySections';
export default function Home(){
    return (
    <Layout>
        <div className="main-container">
            <HomeLanding />
            <MySections />
            <Features />
        </div>
    </Layout>
    );
}