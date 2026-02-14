import {useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
  const navlogo = <img src="/assets/home/devilstrap.png" alt="logo-img" />;
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger]= useState(false);

  //get the current path using location:
  const router = useRouter();
  const path = router.asPath; 


  //check if the user is on mobile:
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //toggles the menu options display:
  const toggleHamburger=()=>{
    setShowHamburger(prev =>!prev);
  }

  let pageTitle = "Supernatural";

  //set up page title so if they are on a child of the respective paths, they have same pageTitle (not Supernatural)
  if (path === "/") pageTitle = "Home";
  else if (path.startsWith("/episodes")) pageTitle = "Episodes";
  else if (path.startsWith("/seasons")) pageTitle = "Seasons";
  else if (path.startsWith("/characters")) pageTitle = "Characters";
  else if (path.startsWith("/monsters")) pageTitle = "The Lore";
  else if (path.startsWith("/sigils")) pageTitle = "Sigils";
  else if (path.startsWith("/spn-then-and-now")) pageTitle = "Then and Now";
  else if (path.startsWith("/conventions")) pageTitle = "Conventions";
  else if (path.startsWith("/beyondspn")) pageTitle = "Beyond SPN";

  //booleans to see if they are a part of the dropdown- for ease
  const journeySelection = path.startsWith("/episodes") || path.startsWith("/seasons");
  const theLoreSelection = path.startsWith("/monsters") || path.startsWith("/sigils");
  const extraSelection = path.startsWith("/spn-then-and-now") || path.startsWith("/conventions") || path.startsWith("/beyondspn");



  //The actual nav links themselves:
  const navUl = (
    <ul>
      <li>
        <Link href="/" className={path === "/" ? "active" : ""}>Home</Link>
      </li>

      <li className="dropdown">
        <span className={journeySelection ? "active" : ""}>The Journey</span>
        <ul className="dropdown-menu">
          <li>
            <Link href="/episodes" className={path.startsWith("/episodes") ? "active" : ""}> Episode Guide </Link>
          </li>
          <li>
            <Link href="/seasons" className={path.startsWith("/seasons") ? "active" : ""}> Season Overview</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/characters" className={path.startsWith("/characters") ? "active" : ""}> Characters</Link>
      </li>

      <li className="dropdown">
        <span className={theLoreSelection ? "active" : ""}>The Lore</span>
        <ul className="dropdown-menu">
          <li>
            <Link href="/monsters" className={path.startsWith("/monsters") ? "active" : ""}>Monsters</Link>
          </li>
          <li>
            <Link href="/sigils" className={path.startsWith("/sigils") ? "active" : ""}>Sigils</Link>
          </li>
        </ul>
      </li>

      <li className="dropdown" id="extras">
        <span className={extraSelection ? "active" : ""}>Extras</span>
        <ul className="dropdown-menu" id="extras-menu">
          <li>
            <Link href="/spn-then-and-now" className={path.startsWith("/spn-then-and-now") ? "active" : ""}> SPN Then and Now </Link>
          </li>
          <li>
            <Link href="/conventions" className={path.startsWith("/conventions") ? "active" : ""}> Conventions</Link>
          </li>
          <li>
            <Link href="/view_api" className={path.startsWith("/view_api") ? "active" : ""}>Winchester's Archive API</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
  const navMobile = (
    <ul>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/" className={path === "/" ? "active" : ""}>Home </Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/episodes" className={path.startsWith("/episodes") ? "active" : ""}> Episodes</Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/seasons" className={path.startsWith("/seasons") ? "active" : ""}>Seasons </Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/characters" className={path.startsWith("/characters") ? "active" : ""}> Characters</Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/monsters" className={path.startsWith("/monsters") ? "active" : ""}> The Lore</Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/sigils" className={path.startsWith("/sigils") ? "active" : ""}>Sigils</Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/spn-then-and-now" className={path.startsWith("/spn-then-and-now") ? "active" : ""}> SPN Then and Now </Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/conventions" className={path.startsWith("/conventions") ? "active" : ""}> Conventions</Link>
      </li>
      <li onClick={() => setShowHamburger(false)}>
        <Link href="/view_api" className={path.startsWith("/view_api") ? "active" : ""}> Vinchester's Archive API</Link>
      </li>
    </ul>
  );

  //hamburger menu option for mobile:
  const mobileBtn = (
    <div className="nav-button">
      <button className="hamburger" onClick={toggleHamburger}>☰</button>
    </div>
  );

  if (isMobile){
    return (
      <nav className="nav-mobile">
        <div className="active-page">
          <h2>{pageTitle}</h2>
        </div>
        {mobileBtn}
        <div className="nav-options" style={{display: showHamburger? "block": "none"}}>
          {navMobile}
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav">
      {navlogo}
      {navUl}
    </nav>
  );
}
