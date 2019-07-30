import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import {Form, Card, Button, Row, Col} from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from"../components/Footer";
import fire from "../config/fire";
import {Redirect} from "react-router-dom"


class Login extends Component {
    constructor(props){
        super(props);
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
        this.state = {
            redirect: false
        }
    }

     authWithEmailPassword(event) {
        event.preventDefault();

        const email = this.emailInput.value
        const password = this.passwordInput.value

        fire.auth().signInWithEmailAndPassword(email, password) 
        .then((user) => {
            if (user && user.email) {
            this.loginForm.reset()
            // this.props.setCurrentUser(user)
            this.setState({redirect: true})
        }
        })
        .catch((error) => {
            console.log(error.message)
            return error.message
        })
    }

        render() {
            // if (this.state.redirect === true) {
            //     return <Redirect to={"/admin"} />
            // }
        return(
            <div>
                <NavBar />
                <Hero />
                <Wrapper>
                <Card style={{width:"60%", margin:"auto", padding:"20px", borderColor:"#758696"}}>
                    <Form onSubmit={(event) => {this.authWithEmailPassword(event)}} 
                    ref={(form) => { this.loginForm = form}}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Email address</Form.Label>
                            <Col sm="10">
                            <Form.Control 
                            ref={(input) => { this.emailInput = input }}
                            type="email" 
                            placeholder="Enter email"
                            // value={this.state.email}
                            // onChange={this.handleChange}
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
                            ref={(input) => { this.passwordInput = input }}
                            // value={this.state.password}
                            // onChange={this.handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Password incorrect
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Button style={{margin:"auto"}}variant="primary" type="submit" value="Log In">
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