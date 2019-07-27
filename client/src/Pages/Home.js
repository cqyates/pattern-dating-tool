import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import TitlebarGridList from "../components/GridList/TitlebarGridList"
import {Col} from "../components/Grid";
import {Form, Card, Row} from "react-bootstrap";
import FormBtn from "../components/FormBtn";
import {List, ListItem} from "../components/List"
import API from "../utils/API";
import DropMenu from "../components/DropMenu";


class Home extends Component {
    state={
      CompanyID: null,
      patterns: [],
      patternNumber: "",
    } 
    
    handlePatternChange = event => {
      this.setState({
        patternNumber: event.target.value
      })
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

    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <Wrapper>
                <Row style={{margin:"10px"}}>
                  <Col size="lg-6">
                   <TitlebarGridList />
                  </Col>
                  {/* <Col size="lg-4">
                    {!this.state.patterns.length ? (
                      <h4>no pattern to display</h4>
                    ) : (
                      <List>
                        {this.state.patterns.map(pattern => {
                          return(
                            <ListItem key={pattern._id} />
                           
                          );
                        })}
                      </List>
                    )}
                  </Col> */}
                 
                  <Col size="lg-8">

                    <Card className="imageSearch">
                    <Form className="searchForm">
                      <h4>Search for a Pattern</h4>
                      <Form.Group>
                        <Form.Label>Company</Form.Label>
                      <DropMenu handleChange={this.handleCompanySelection}/>
                      </Form.Group>

                      <Form.Group controlId="patternFormNumber">
                          <Form.Label>Pattern Number</Form.Label>
                          <Form.Control
                          name="patternNumber" 
                          placeholder="XXXX"
                          value={this.state.patternNumber}
                          onChange={this.handlePatternChange} />
                      </Form.Group>
                      <FormBtn onClick={this.handleSubmit} >
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