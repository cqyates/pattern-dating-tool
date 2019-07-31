/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./style.css";

 function NavBar () {

    return (
        <div className="navBar">
        <Navbar className="NavBar" bg="white" variant="light">

        <Nav className="mr-auto">
          <div>
            <a rel="noopener noreferrer" href="/">
              <i className="fas fa-home"></i>
            </a>
      
            <a target="_blank" href="https://www.vintage4me2.com/">
              <i className="fas fa-shopping-cart"></i>
            </a>
            
            <a rel="noopener noreferrer" href="/login">
              <i className="fas fa-lock"></i>
            </a>
          </div>
        </Nav>
        <h1>Vintage4Me2</h1>
        {/* <Form inline>
          <Button variant="outline-primary">
            Login
          </Button>
        </Form> */}
      </Navbar>
      </div>
    )
}
export default NavBar;