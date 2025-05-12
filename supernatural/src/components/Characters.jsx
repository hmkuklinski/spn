import JohnsJournal from './JohnsJournal';
import Character from './Character';
import Layout from './Layout';
import {characters} from './characterInfo.js';
import {useParams} from "react-router-dom";

export default function Characters(){
    const {id} = useParams();
    const currCharacterIndex = characters.findIndex(character => character.id === id);

    //error:
    if (currCharacterIndex === -1){
        return <Layout>Error. Character {id} cannot be found</Layout>
    }

    const currCharacter = characters[currCharacterIndex];
    //see if previous character:
    const prevCh =  currCharacter.prev != null? characters[currCharacter.prev]: null;
    let prevLink = null;
    //dean redirects to glossary, else, has previous set to prev character's id
    if (currCharacter.id === "dean") prevLink = "/characters";
    else{
        if (prevCh) prevLink=`/characters/${prevCh.id}`;
    }

    //see if next character:
    const nextCh =  currCharacter.next != null? characters[currCharacter.next]: null;
    let nextLink = null;
    //more characters in list, can set valid next link
    if(currCharacterIndex<characters.length-1){
        nextLink = `/characters/${nextCh.id}`;
    }
    else{
        nextLink = "/characters/redirect";
    }
    
    return (
        <Layout>
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Character {...currCharacter} />
            </JohnsJournal>
        </Layout>
    );
}