import { useRouter } from "next/router";
import Episodes from "../../src/components/episodes/Episodes";

export default function ShowEpisodes(){
    const router = useRouter();
    const {id}= router.query;

    if (!id) return null;
    return <Episodes seasonId={id}/>
}