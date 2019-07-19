import React from "react";
import {Row} from "../Grid"
import "./style.css";

function Header() {
    return(
    
    <div className="header">
      <Row
      style={{
      display:"inline"
      }}>
        <img
          src="https://cdn2.shopify.com/s/files/1/0975/7206/files/vintage4me2-Logo-600-face_180x.jpg?v=1551143139"
          width="150"
          height="150"
          alt="brand logo"
          />
        <h1>Vintage 4 Me 2</h1>
      </Row>
    </div>   
  )
}
export default Header;
