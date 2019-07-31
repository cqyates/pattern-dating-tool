import React, {Component} from "react";
// import {Redirect } from 'react-router-dom';
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
            password:"",
        }
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => { 
            const userEmail = res.data;
            const userPassword = res.data;
            console.log(userEmail, userPassword)
            this.setState({email:userEmail, password:userPassword})  
        }).catch(error => console.log(error))
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
                            <Form.Label column sm="3">Email address</Form.Label>
                            <Col sm="9">
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
                            <Form.Label column sm="3">Password</Form.Label>
                            <Col sm="9">
                            <Form.Control 
                            required
                            type="password" 
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
                        value="Submit"
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