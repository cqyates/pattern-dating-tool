import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import LoginForm from "../components/Formik/LoginForm"
import {Row, Col} from "react-bootstrap";

class Login extends Component {
    render() {

        return(
            <div>
                <NavBar />
                <Hero />
                <Wrapper />
                <Row>
                <Col size="sm-6" style={{margin:"0px 60px"}}>
                    <LoginForm />
                </Col>
                </Row>
                 
            </div>
        )
    }
}


export default Login