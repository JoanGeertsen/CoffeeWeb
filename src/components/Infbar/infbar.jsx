import React, { useState } from "react";
import "./infbar.css";

function Infbar() {
  return (
    <nav className="Infbar">
      <img src={process.env.PUBLIC_URL + `/Imgs/facebook.png` } alt="" className="icon"/>                     
        <a href="" className="fb">FB icon</a>        
        <a href="" className="fb">INF TXT</a>        
    </nav>
  );
}

export default Infbar;