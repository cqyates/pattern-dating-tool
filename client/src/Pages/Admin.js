import React, {Component} from "react";
// import {Col, Row} from "../components/Grid";
import Input from "../components/Input";
import Hero from "../components/Hero"
import { Form, Container, Row, Col, Card } from "react-bootstrap";
// import Header from "../components/Header";
import FormBtn from "../components/Form";
import OCR from "./OCR";
import API from "../utils/API/api";

//this page still has problems.  The inputs are not working they should set the state of company, season and year.


class Admin extends Component {
    state={
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
      };

      //this is not yet working.  It is calling to the utils/API which is calling to the back end to get a list of companies from the Mongo 
      getCompanies(query) {
        console.log(query)
        API.getCompanies(query)
          .then(res => {
            console.log(res)
            const companyList = res.data.map(b => {
              return {
                companyList
              };
            });
            this.setState({ companies: companyList });
          })
          .catch(error => console.log(error));
      }

      
       
    render() {
        return (
            <div>
                <Hero />
                <Container>
                <div style={{margin: "auto", width:"50%", padding:"20px"}}>
                    <Card>

                    <OCR />
                    
                    <Row style={{padding:"10px"}}>
                        <Col style={{marginTop: "20px"}}>
                            <Form>
                            <Form.Group controlId="companyForm">
                                <Form.Control as="select" style={{borderColor:"#758696"}} onChange={this.handleInputChange}
                                value={this.state.company}>
                                <option>select company</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="seasonForm">
                                <Form.Control as="select" style={{borderColor:"#758696"}} onChange={this.handleInputChange}
                                value={this.state.season}>>
                                <option>select season</option>
                                <option>fall</option>
                                <option>winter</option>
                                <option>spring</option>
                                <option>summer</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>                     
                            <Input as="text" name="year" placeholder="YYYY (required)" onChange={this.handleInputChange}
                                value={this.state.year}></Input>
                            <FormBtn>Submit</FormBtn>   
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