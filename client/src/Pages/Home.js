import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import TitlebarGridList from "../components/GridList/TitlebarGridList"
import {Col} from "../components/Grid";
import {Form, Card, Row} from "react-bootstrap";
import FormBtn from "../components/FormBtn";
import API from "../utils/API";


class Home extends Component {
  constructor(props) {
  super(props);

  this.searchPattern = this.searchPattern.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlePatternChange = this.handlePatternChange.bind(this);

    this.state={
      // this array will hold the list of pages from the pattern model
      patterns: [],
      patternNumber: "",
      validated: false
    }; 
  }

    searchPattern(id) {
      console.log(id);
      API.searchPattern(id)
      .then(res => {
        const patternResults = res.data;
        this.setState({ patterns: patternResults})
      })
      .catch(error => console.log(error));
    }
    
    handlePatternChange = event => {
      const {name, value} = event.target;
      this.setState({ [name]: value });
      // this.setState({ 
      //   patternNumber: event.target.value
      // })
    };

    handleSubmit(event) {
      const search = event.currentTarget;

      if(search.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        this.setState({validated: true});
        this.searchPattern(this.state.patternNumber)
      }
    }

    // handleSubmit = event => {
    //   event.preventDefault();
    //   API.searchPattern(this.state.patternNumber)
    //     .then(res => {
    //       const patternResults = res.data;
    //       console.log(patternResults)
    //       this.setState({patterns: patternResults });
    //   })
    //   .catch(error => console.log(error))
    // }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <NavBar />
                <Hero />
                <Wrapper>
                <Row style={{margin:"10px"}}>

                  <Col size="lg-6">
                   <TitlebarGridList />
                  </Col>

                  <Col size="lg-8">
                    <Card className="imageSearch">
                    <Form className="searchForm"
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                    >
                      <h4>Search for a Pattern</h4>
                      <Form.Group>
                        <Form.Label>Company</Form.Label>
                        {/* TODO============================= */}
                        {/* insert Corey's dropdown component */}
                        {/* ================================= */}   
                      </Form.Group>
                      <Form.Group controlId="patternNumber">
                          <Form.Label>Pattern Number</Form.Label>
                          <Form.Control
                          name="patternNumber" 
                          placeholder="XXXX"
                          required
                          value={this.state.patternNumber}
                          onChange={this.handlePatternChange} 
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a 4 digit number.
                      </Form.Control.Feedback>
                      </Form.Group>
                      <FormBtn>
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