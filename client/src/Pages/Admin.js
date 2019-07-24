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
        console.log(this.state)
      };
      componentDidMount(){
        this.getCompanies();
      }

      //this is not yet working.  It is calling to the utils/API which is calling to the back end to get a list of companies from the Mongo.
      //what is up with the b on line 39.  Also I don't think I need a query argument. This function gets called with Component did mount.
      getCompanies(query) {
        API.getCompanies(query)
          .then(res => {
            //This console.log is not getting hit.
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

      
    // Company Input needs to pull in the list from the database and add them as options to the dropdown menu.
    //there is a function above called getCompanies that is making an ajax call.
    
    //Season needs to set the state for one for the four seasons

    //Year needs to set the state for year and validate that it is the correct format YYYY

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
                                <Form.Control as="select" style={{borderColor:"#758696"}} 
                                value={this.state.company}>
                                <option>select company</option>
                                <option></option>                              
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="seasonForm">
                                <Form.Control as="select" style={{borderColor:"#758696"}}
                                value={this.state.season}>>
                                <option>select season</option>
                                <option>fall</option>
                                <option>winter</option>
                                <option>spring</option>
                                <option>summer</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>                     
                            <Input as="text" name="year" placeholder="YYYY (required)" 
                                value={this.state.year}></Input>
                            <FormBtn onClick={this.handleInputChange}>Submit</FormBtn>   
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