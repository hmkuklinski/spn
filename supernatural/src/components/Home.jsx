import HomeLanding from './HomeLanding';
import Layout from './Layout';
import Features from './Features';

export default function Home(){
    return (
    <Layout>
        <div className="main-container">
            <HomeLanding />
            <Features />
        </div>
    </Layout>
    );
}