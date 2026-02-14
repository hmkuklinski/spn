import { useRouter } from "next/router";
import SeasonRouting from "../../src/components/seasons/SeasonRouting";

export default function ShowSeasonInfo(){
    const router = useRouter();
    const {seasonNum} = router.query;

    if (!seasonNum) return null;
    return <SeasonRouting seasonId={seasonNum}/>;
}