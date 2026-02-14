import SeasonAPI from "../../../src/components/api_results/seasonAPI";
import { useRouter } from "next/router";

export default function ViewSeasonInfo(){
    const router = useRouter();
    const {seasonNum} = router.query;

    if (!seasonNum) return <p>Loading...</p>;
    return <SeasonAPI seasonNum={seasonNum}/>
}