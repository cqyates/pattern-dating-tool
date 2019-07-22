import React from "react";
import {Navbar, Nav, Button, Form} from "react-bootstrap";
import "./style.css";

 function NavBar () {

    return (
        <Navbar bg="white" variant="light">
        <Navbar.Brand className="navBrand" href="#home" style={{color:"#758696"}}>Vintage 4 Me 2</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-primary">
            Login
          </Button>
        </Form>
      </Navbar>
    )
}
export default NavBar;