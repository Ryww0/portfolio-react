import React from "react";
import logo from "../../assets/logo.svg";

function Header({ toggleAbout, aboutIsActive }) {
  return (
    <nav>
      <div className="navLogo">
        <img className={aboutIsActive && "active"} src={logo} alt="logo" />
        <p>Développeur web</p>
        <p>Lyon, France</p>
      </div>
      <ul className="navItems">
        <li onClick={() => toggleAbout()}>.about</li>
        <li>.contact</li>
      </ul>
    </nav>
  );
}

export default Header;
