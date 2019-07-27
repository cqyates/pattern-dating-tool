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
import DropMenu from "../components/DropMenu";


class Home extends Component {
    state={
      CompanyID: null,
      patterns: [],
      patternNumber: "",
      validated: false
    }; 
  

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

    handleCompanySelection = (companyID) => {
      console.log(companyID)
      this.setState({companyID})
    }

    handleSubmit = event => {
      event.preventDefault();
      API.searchPattern(this.state.patternNumber)
        .then(res => {
          const patternResults = res.data;
          console.log(patternResults)
          this.setState({patterns: patternResults });
      })
      .catch(error => console.log(error))
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
                      <DropMenu handleChange={this.handleCompanySelection}/>
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