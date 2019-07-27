/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./style.css";

 function NavBar () {

    return (
        <Navbar bg="white" variant="light">

        <Nav className="mr-auto">
          <div>
            <a target="_blank" href="/">
              <i className="fas fa-home"></i>
            </a>
      
            <a target="_blank" href="https://www.vintage4me2.com/">
              <i className="fas fa-shopping-cart"></i>
            </a>
            
            <a target="_blank" href="/login">
              <i className="fas fa-lock"></i>
            </a>
          </div>
        </Nav>
        <h1>Vintage 4 Me 2</h1>
        {/* <Form inline>
          <Button variant="outline-primary">
            Login
          </Button>
        </Form> */}
      </Navbar>
    )
}
export default NavBar;