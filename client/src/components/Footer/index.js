/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a target="_blank" href="https://www.pinterest.com/vintage4me2/">
          <i className="fab fa-pinterest fa-fw"></i>
        </a>
        < a target="_blank" href="https://www.facebook.com/Vintage4me2too/">
          <i className="fab fa-facebook-square fa-fw"></i>
        </a>
      </div>
      <span>
        <i className="far fa-copyright"></i>
        Pattern Catalog 2019
      </span>
    </footer>
  );
}

export default Footer;
