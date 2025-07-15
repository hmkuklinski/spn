import Layout from '../../Layout';
import ConventionLanding from './ConventionLanding';
import { conventions } from '../../data/conventions';

export default function Conventions(){
    return (
        <Layout>
            <div className="main-container">
                {conventions.map((con)=>(
                    <div className="con-entire">
                        <ConventionLanding imgsrc={con.imgsrc} desc={con.desc} evList={con.conventionList} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}