import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import {Form, Card, Row, Col} from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from"../components/Footer";
import fire from "../config/fire";

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            password:""
        }
    }
    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {     
        }).catch((error) => {
            console.log(error);
        })
    }
     handleChange(e) {
         this.setState({ [e.target.name]: e.target.value });
     }

        render() {

        return(
            <div>
    
                <NavBar />
                <Hero />
                <Wrapper>
                <Card style={{width:"60%", margin:"auto", padding:"20px", borderColor:"#758696"}}>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Email address</Form.Label>
                            <Col sm="10">
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Password</Form.Label>
                            <Col sm="10">
                            <Form.Control 
                            required
                            type="text" 
                            name="password"                     
                            placeholder="Password"                            
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Password incorrect
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Control 
                        style={{margin:"auto", backgroundColor:"#c2e5fc"}}
                        // variant="primary" 
                        type="submit" 
                        onClick={this.login}>
                        </Form.Control> 
                         
                    </Form>             
                </Card>
                </Wrapper>
                <Footer />
            </div>
          
        )
    }
}
export default Login;