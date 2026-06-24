import {useState, useEffect} from "react";
import Link from "next/link";
import SectionDesc from "./SectionDesc";

export default function Feature({contentType, ...props}){
    const [isMobile, setIsMobile] = useState(false);

    //to check if screen is mobile:
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //use for Link href:
    const defaultLinks = {
        monster: "/monsters",
        character: "/characters",
        episode: "/episodes",
        sigil: "/sigils",
    };

    //see if subtitle or alternative imgSrc value based on contentType:
    let subtitle="";
    let imgSrc =`${props.imgsrc}`;
    if (contentType === "character" && props.name){
        subtitle = props.type? `${props.name} - ${props.type}`: `${props.name}`;
    }
    else if (contentType === "monster" && props.name){
        subtitle = `${props.name}`;
    }
    else if (contentType==="episode"){
        subtitle = `${props.id}: ${props.title}`;
        imgSrc=`${props.photo}`;
    }

    //create featured item using SectionDesc:
    return <SectionDesc title={props.feature} imgsrc={imgSrc} desc={props.description} buttonLink={props.link || defaultLinks[contentType]} subtitle={subtitle} />;
}