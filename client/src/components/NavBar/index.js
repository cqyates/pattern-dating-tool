import React from "react";
import {Navbar, Nav, Button, Form, FormControl} from "react-bootstrap";
import "./style.css";

 function NavBar () {

    return (
        <Navbar bg="white" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
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