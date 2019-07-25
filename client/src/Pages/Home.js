import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import {Col} from "../components/Grid";
import {Form, Card, Row} from "react-bootstrap";
import FormBtn from "../components/FormBtn";
import API from "../utils/API";


class Home extends Component {
    state={
      // this array will hold the list of pages from the pattern model
      patterns: [],
      patternNumber: "",
    } 
    
    handlePatternChange = event => {
      this.setState({
        patternNumber: event.target.value
      })
    };

    handleSubmit = event => {
      event.preventDefault();
      API.searchPattern(this.state.patternNumber)
        .then(res => this.setState({patterns: res.data}))
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <Wrapper>
                <Row style={{margin:"10px"}}>
                  <Col size="lg-4">
                    {!this.state.patterns.length ? (
                      <h3>No Patterns to Display</h3>
                    ) : (
                      <dl>
                        {this.state.patterns.map(pattern => {
                          return (
                            <dt 
                            key={pattern._id}
                            />
                          );
                        })}

                        {/* <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>    */}
                      </dl>
                    )}
                  </Col>
                  <Col size="lg-4">
                    <dl>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>
                        <dt><img src="https://via.placeholder.com/100" alt=""></img></dt>  
                        
                    </dl>      
                  </Col>
                  <Col size="lg-4">
                    <dt><img src="https://via.placeholder.com/500x540" alt=""></img></dt>
                  </Col>
                  <Col size="lg-4">

                    <Card className="imageSearch">
                    <Form className="searchForm">
                      <h4>Search for a Pattern</h4>
                      <Form.Group>
                        <Form.Label>Company</Form.Label>
                        {/* TODO============================= */}
                        {/* insert Corey's dropdown component */}
                        {/* ================================= */}   
                      </Form.Group>

                      <Form.Group controlId="patternFormNumber">
                          <Form.Label>Pattern Number</Form.Label>
                          <Form.Control
                          name="patternNumber" 
                          placeholder="XXXX"
                          value={this.state.patternNumber}
                          onChange={this.handlePatternChange} />
                      </Form.Group>
                      <FormBtn onClick={this.handleSubmit}>
                        Search
                      </FormBtn>
                    </Form>

                    </Card>
                  </Col> 
                </Row>

                </Wrapper>
                <Footer />
            
            </div>
        )
       
    }
}

export default Home;