/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import "./style.css";
import fire from "../../config/fire"
 
class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout(){
    fire.auth().signOut();
  }
    render() {
      return (
        <div className="navBar">
        <Navbar className="NavBar" bg="white" variant="light">
        <Nav className="mr-auto">
          <div>
          <Button onclick={this.logout}>Logout</Button>
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
}
export default NavBar2;