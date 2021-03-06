import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import {Form, Card, Row, Col} from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from"../components/Footer";
import FormBtn from "../components/FormBtn"
import fire from "../config/fire";

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            password:"",
            user:{},
            redirect: false
        }
    }
    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
           
        ).catch((error) => {
            console.log(error);
        })
    }
     handleChange(event) {
         this.setState({ [event.target.name]: event.target.value });
     }
     componentDidMount(){
        this.authListener();
        }
        authListener() {
            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ user });
                  } else {
                    this.setState({ user: null });
                }
              });
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
                        <FormBtn>
                        <a style={{ color:"#758696",
                        fontFamily:'Open Sans, sans-serif'}}
                        href="/admin"
                        rel="noopener noreferrer">Login</a>
                        </FormBtn>
                  
                    </Form>             
                </Card>
                </Wrapper>
                <Footer />
            </div>
          
        )
    }
}
export default Login;