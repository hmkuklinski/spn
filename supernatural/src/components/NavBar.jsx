import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navlogo = <img src="/assets/home/devilstrap.png" alt="logo-img" />;
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger]= useState(false);

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

  //The actual nav links themselves:
  const navUl = (
    <ul>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
       <li className="dropdown">
        <span>The Journey</span>
        <ul className="dropdown-menu">
          <li><NavLink to="/episodes" className={({ isActive }) => isActive ? "active" : ""}>Episode Guide</NavLink></li>
          <li><NavLink to="/seasons" className={({ isActive }) => isActive ? "active" : ""}>Season Overview</NavLink></li>
        </ul>
      </li>
      <li><NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Characters</NavLink></li>
      <li className="dropdown">
        <span>The Lore</span>
        <ul className="dropdown-menu">
          <li><NavLink to="/monsters">Monsters</NavLink></li>
          <li><NavLink to="/sigils">Sigils</NavLink></li>
        </ul>
      </li>

      <li><NavLink to="/beyondspn" className={({ isActive }) => isActive ? "active" : ""}>#BeyondSPN</NavLink></li>
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
      <li onClick={() => setShowHamburger(false)}><NavLink to="/beyondspn" className={({ isActive }) => isActive ? "active" : ""}>#BeyondSPN</NavLink></li>
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
