import { useRouter } from "next/router";
import Sigils from "../../src/components/sigils/Sigils";

export default function ShowSigils(){
    const router = useRouter();
    const {id} = router.query;

    if (!id) return null;
    return <Sigils sigilId={id}/>;
}