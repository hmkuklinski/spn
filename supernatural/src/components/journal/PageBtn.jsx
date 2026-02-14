import Link from "next/link";

export default function PageBtn({isBackwards, navLink}){
    const linkStyle = {};
    if (!navLink) {
    linkStyle.visibility = "hidden";
    }


    return (
        <div className="pagebtn-container" style={linkStyle}>
            {isBackwards && <Link href={navLink} className="nav-backwards"><ion-icon name="arrow-back-outline"></ion-icon></Link>}
            {!isBackwards && <Link href={navLink} className="nav-forwards"><ion-icon name="arrow-forward-outline"></ion-icon></Link>}
        </div>
    );
}