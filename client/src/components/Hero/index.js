import React from "react";
import hero from './hero.png';
import "./style.css";

function Hero() {
  return (
    <div style={{boxSshadow: "10px 10px 5px grey"}}>
      <img className="heroNav text-center" src={hero} alt="hero" style={{width:"100%"}}/>
    </div>
  );
}

export default Hero;
