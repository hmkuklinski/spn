import Characters from "../../src/components/characters/Characters";
import { useRouter } from "next/router";

export default function ShowCharacter(){
    const router = useRouter();
    const {id} = router.query;

    if (!id) return null;
    return <Characters characterId={id}/>
}