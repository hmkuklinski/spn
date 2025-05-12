import HomeLanding from './HomeLanding';
import Layout from './Layout';

export default function Home(){
    return (
    <Layout>
        <div className="main-container">
            <HomeLanding />
        </div>
    </Layout>
    );
}