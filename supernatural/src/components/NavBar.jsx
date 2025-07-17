import {useState, useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const navlogo = <img src="/assets/home/devilstrap.png" alt="logo-img" />;
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger]= useState(false);

  //get the current path using location:
  const location = useLocation();
  const path = location.pathname;

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
  else if (path.startsWith("/podcast")) pageTitle = "Then and Now";
  else if (path.startsWith("/conventions")) pageTitle = "Conventions";
  else if (path.startsWith("/beyondspn")) pageTitle = "Beyond SPN";

  //booleans to see if they are a part of the dropdown- for ease
  const journeySelection = path.startsWith("/episodes") || path.startsWith("/seasons");
  const theLoreSelection = path.startsWith("/monsters") || path.startsWith("/sigils");
  const extraSelection = path.startsWith("/podcast") || path.startsWith("/conventions") || path.startsWith("/beyondspn");



  //The actual nav links themselves:
  const navUl = (
    <ul>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
       <li className="dropdown">
        <span className={journeySelection ? "active" : ""}>The Journey</span>
        <ul className="dropdown-menu">
          <li><NavLink to="/episodes" className={({ isActive }) => isActive ? "active" : ""}>Episode Guide</NavLink></li>
          <li><NavLink to="/seasons" className={({ isActive }) => isActive ? "active" : ""}>Season Overview</NavLink></li>
        </ul>
      </li>
      <li><NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Characters</NavLink></li>
      <li className="dropdown">
        <span className={theLoreSelection ? "active" : ""}>The Lore</span>
        <ul className="dropdown-menu">
          <li><NavLink to="/monsters">Monsters</NavLink></li>
          <li><NavLink to="/sigils">Sigils</NavLink></li>
        </ul>
      </li>
      <li className="dropdown" id="extras" >
        <span className={extraSelection ? "active" : ""}>Extras</span>
        <ul className="dropdown-menu" id="extras-menu">
          <li><NavLink to="/podcast" className={({ isActive }) => isActive ? "active" : ""}>Podcast</NavLink></li>
          <li><NavLink to="/conventions"className={({ isActive }) => isActive ? "active" : ""}>Conventions</NavLink> </li>
          {/* <li><NavLink to="/beyondspn"className={({ isActive }) => isActive ? "active" : ""}>Beyond SPN</NavLink> </li> */}
        </ul>
      </li>

      
    </ul>
  );
   const navMobile = (
    <ul>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/episodes" className={({ isActive }) => isActive ? "active" : ""}>Episodes</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/seasons" className={({ isActive }) => isActive ? "active" : ""}>Seasons</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Characters</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/monsters" className={({ isActive }) => isActive ? "active" : ""}>The Lore</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/sigils" className={({ isActive }) => isActive ? "active" : ""}>Sigils</NavLink></li>
      {/* <li onClick={() => setShowHamburger(false)}><NavLink to="/beyondspn" className={({ isActive }) => isActive ? "active" : ""}>Beyond SPN</NavLink></li> */}
      <li onClick={() => setShowHamburger(false)}><NavLink to="/podcast" className={({ isActive }) => isActive ? "active" : ""}>Then and Now</NavLink></li>
      <li onClick={() => setShowHamburger(false)}><NavLink to="/conventions"className={({ isActive }) => isActive ? "active" : ""}>Conventions</NavLink> </li>
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
