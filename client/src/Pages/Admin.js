import React, { Component } from "react";
// import {Col, Row} from "../components/Grid";
import Input from "../components/Input";
import Hero from "../components/Hero"
import { Form, Container, Row, Col, Card } from "react-bootstrap";
// import Header from "../components/Header";
import OCR from "./OCR";
import DropMenu from "../components/DropMenu";

class Admin extends Component {
  state = {
    company: "",
    season: "",
    year: "",
  }
  //This function should match all the names and values in the state
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <Hero />
        <Container>
          <div style={{ margin: "auto", width: "50%", padding: "20px" }}>
            <Card>

              <OCR />

              <Row style={{ padding: "10px" }}>
                <Col style={{ marginTop: "20px" }}>
                  <Form>
                   <DropMenu />
                    <Form.Group controlId="seasonForm">
                      <Form.Control as="select" style={{ borderColor: "#758696" }}
                        value={this.state.season} onChange={this.handleInputChange}>
                                <option>select season</option>
                        <option>fall</option>
                        <option>winter</option>
                        <option>spring</option>
                        <option>summer</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <Input as="text" name="year" placeholder="YYYY (required)"
                    value={this.state.year} onChange={this.handleInputChange}></Input>
                </Col>
              </Row>
            </Card>
          </div>
        </Container>
      </div>



    )
  }
}
export default Admin;