import React from "react";
import hero from './hero.png';
import "./style.css";

function Hero() {
  return (
    <div>
      <img className="heroNav text-center" src={hero} alt="hero" style={{width:"100%"}}/>
    </div>
  );
}

export default Hero;
