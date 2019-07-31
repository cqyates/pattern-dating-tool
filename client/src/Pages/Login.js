import React, {Component} from "react";
// import {Redirect } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import {Form, Card, Row, Col} from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from"../components/Footer";
import fire from "../config/fire";

class Login extends Component {

        // this.handleSumbit = this.handleSumbit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     email:"",
        //     password:"",
   
    // handleChange(e) {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // handleSumbit(e) {
    //     e.preventDefault();
    //     console.log(this.state)
    
    //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         if (errorCode === 'auth/wrong-password') {
    //             alert('Wrong password.');
    //         } else {
    //             alert(errorMessage);
    //         }
    //         console.log(error);
    //     });
    // }
        render() {

        return(
            <div>
    
                <NavBar />
                <Hero />
                <Wrapper>
                <Card style={{width:"60%", margin:"auto", padding:"20px", borderColor:"#758696"}}>
                    <Form onSubmit={this.props.handleSumbit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">Email address</Form.Label>
                            <Col sm="9">
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={this.props.email}
                            onChange={this.props.handleChange}
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
                            value={this.props.password}
                            onChange={this.props.handleChange}
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
                        value="Submit">
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