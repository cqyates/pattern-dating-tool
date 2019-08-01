/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import "./style.css";

 
class NavBar2 extends Component {
 
    render() {
      return (
        <div className="navBar">
        <Navbar className="NavBar" bg="white" variant="light">
        <Nav className="mr-auto">
          <div>
          <Button>
            <a className="logoutBtn" rel="noopener noreferrer" href="/">Logout</a>
          </Button>
          </div>
        </Nav>
        <h1>Vintage4Me2</h1>
      
      </Navbar>
      </div>
    )
  } 
}
export default NavBar2;