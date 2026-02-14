import { useRouter } from "next/router";
import TheLore from "../../src/components/monsters/TheLore";

export default function ShowMonster(){
    const router = useRouter();
    const {id} = router.query;

    if (!id) return null;
    return <TheLore monsterId={id} />;
}