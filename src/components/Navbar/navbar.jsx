import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <img src={process.env.PUBLIC_URL + `/Imgs/WestrockcoffeelogoName.png` } alt="" className="nav_brand"/>
      <img src={process.env.PUBLIC_URL + `/Imgs/Westrockcoffeelogo.png` } alt="" className="brand_img"/>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Café
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Otros productos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contacto
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;