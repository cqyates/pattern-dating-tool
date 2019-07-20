import React, {Component} from "react";
// import {Col, Row} from "../components/Grid";
import Input from "../components/Input";
// import Hero from "../components/Hero"
import { Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import FormBtn from "../components/Form";
import OCR from "./OCR"



class Admin extends Component {
    state={
      
        
    } 
    render() {
        return (
            <div>
                <Header />  
                <Container>
                <div style={{margin: "auto", width:"50%", padding:"20px"}}>
                    <OCR />
                    
                    <Row>
                        <Col style={{marginTop: "20px"}}>
                            <Input as="text" name="company" placeholder="Company (required)" />
                            <Form>
                                <Form.Group controlId="seasonForm.ControlSelect1">
                                    <Form.Control as="select" style={{borderColor:"#758696"}}>
                                    <option>select season</option>
                                    <option>fall</option>
                                    <option>winter</option>
                                    <option>spring</option>
                                    <option>summer</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>                     
                            <Input as="text" name="year" placeholder="YYYY (required)" />
                            <FormBtn>Submit</FormBtn>   
                        </Col>
                    </Row>
                </div>
                </Container> 
        </div>   
                                   
            
               
        )
    }
}
export default Admin;