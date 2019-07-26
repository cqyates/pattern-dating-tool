import React from "react";
import {Navbar, Nav} from "react-bootstrap";

import "./style.css";

 function NavBar () {

    return (
        <Navbar bg="white" variant="light">
        {/* <Navbar.Brand className="navBrand" href="#home" style={{color:"#758696"}}>Vintage4Me2</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link>
            <i className="fas fa-home" href="#home"></i>
            <a href="https://www.vintage4me2.com/">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <i className="fas fa-lock"></i>
          </Nav.Link>
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