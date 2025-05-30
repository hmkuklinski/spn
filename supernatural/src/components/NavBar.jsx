import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navlogo = <img src="/assets/devilstrap.png" alt="logo-img" />;
  return (
    <nav className="nav">
      {navlogo}
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/episodes" className={({ isActive }) => isActive ? "active" : ""}>Episodes</NavLink></li>
        <li><NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Characters</NavLink></li>
        <li><NavLink to="/monsters" className={({ isActive }) => isActive ? "active" : ""}>The Lore</NavLink></li>
        <li><NavLink to="/sigils" className={({ isActive }) => isActive ? "active" : ""}>Sigils</NavLink></li>
        <li><NavLink to="/beyondspn" className={({ isActive }) => isActive ? "active" : ""}>Beyond SPN</NavLink></li>
      </ul>
    </nav>
  );
}
