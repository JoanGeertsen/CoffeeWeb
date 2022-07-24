import React, { useState } from "react";
import "./infbar.css";

function Infbar() {
  return (
    <nav className="infbar">
      <div className="iconContainer">
        <img src={process.env.PUBLIC_URL + `/Imgs/facebook.png` } alt="" className="iconFB"/>                     
        <img src={process.env.PUBLIC_URL + `/Imgs/instagram.png` } alt="" className="iconIG"/>  
      </div>                           
      <a href="" className="txt">Sopa</a>
    </nav>
  );
}

export default Infbar;