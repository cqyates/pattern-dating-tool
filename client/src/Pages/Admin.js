import React, { Component } from "react";
// import {Col, Row} from "../components/Grid";
import Input from "../components/Input";
import Hero from "../components/Hero"
import { Form, Container, Row, Col, Card } from "react-bootstrap";
// import Header from "../components/Header";
import OCR from "./OCR";
// import API from "../utils/API/api";

//this page still has problems.  The inputs are not working they should set the state of company, season and year.


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
                    <Form.Group controlId="companyForm">
                      <Form.Control as="select" style={{ borderColor: "#758696" }}
                        value={this.state.company} onChange={this.handleInputChange}>
                        <option>select company</option>
                        <option>Butterick</option>
                        <option>McCall</option>
                        <option>Simplicity</option>
                        <option>Advance</option>
                        <option>Hollywood</option>
                        <option>Du Barry</option>
                        <option>New York</option>
                        <option>Anne Adams</option>
                        <option>Marian Martin</option>
                        <option>Excella</option>
                        <option>Superior</option>
                        <option>Pictoral Review</option>
                        <option>Mail Order</option>
                        <option>Fashion Server</option>
                        <option>Ladies Home Journal</option>
                        <option>Vogue</option>
                      </Form.Control>
                    </Form.Group>
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