import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <nav>
      <div className="navLogo">
        <img src={logo} alt="logo" />
        <p>Développeur web</p>
        <p>Lyon, France</p>
      </div>
      <ul className="navItems">
        <li>.about</li>
        <li>.contact</li>
      </ul>
    </nav>
  );
}

export default Header;
