import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import {Form, Card, Button} from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from"../components/Footer";
import fire from "../config/fire"



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
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error)
        });
    }
    handleChange(e){
    this.setState({ [e.target.name] : e.target.value });
    }
        render()  {
        return(
            <div>
                <NavBar />
                <Hero />
                <Wrapper>
                <Card style={{width:"60%", margin:"auto", padding:"20px"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.login}>
                            Login
                        </Button>
                    </Form>             
                </Card>
                </Wrapper>
                <Footer />
            </div>
          
        )
    }
}
export default Login;