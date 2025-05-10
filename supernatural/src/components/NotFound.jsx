import Layout from './Layout';
import {Link} from "react-router-dom";

export default function NotFound(){
    return (
    <Layout>
        <div className="main-container">
            <h1>404- Page Loading Error</h1>
            <p>Time to pull over. You've made a wrong turn somewhere.</p>
            <Link to="/"><button>Go Back Home</button></Link>
        </div>   
    </Layout>
    )
}