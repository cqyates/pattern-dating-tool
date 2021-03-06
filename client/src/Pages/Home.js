import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import TitlebarGridList from "../components/GridList/TitlebarGridList"
import { Col } from "../components/Grid";
import { Form, Row, Image, Card } from "react-bootstrap";
import FormBtn from "../components/FormBtn";
import API from "../utils/API";
// import DropMenu from "../components/DropMenu";
import cover from "../images/cover.jpg";

class Home extends Component {
  state = {
    companyID: null,
    patterns: [],
    query: "",
    validated: false,
    src: ""
  };


  searchPattern(query) {
    console.log(query);
    API.searchPattern(query)
      .then(res => {
        const patternResults = res.data;
        this.setState({ patterns: patternResults })
      })
      .catch(error => console.log(error));
  }

  handlePatternChange = event => {
    this.setState({
      query: event.target.value
    })
    // const {name, value} = event.target;
    // this.setState({ [name]: value });
  };

  handleCompanySelection = (companyID) => {
    console.log(companyID)
    this.setState({ companyID })
  }

  handleSubmit = event => {
    event.preventDefault();
    API.searchPattern(this.state.query)
      .then(res => {
        const patternResults = res.data;
        console.log(patternResults)
        this.setState({ patterns: patternResults });
      })
      .catch(error => console.log(error))
  }

  render() {
    const { validated } = this.state;
    return (
      <div>
        <NavBar />
        <Hero />
        <Wrapper>
          <Row style={{ margin: "10px" }}>

            <Col size="lg-4">
              <TitlebarGridList />
            </Col>

            <Col size="lg-4">
              {this.state.patterns.length ? (
                <div>
                  {this.state.patterns.map(pattern => (
                    <Image alt={pattern.patternNumber}
                      src={pattern.page.imgURL}
                      style={{ width: "405px", height: "540px", marginLeft: "10%" }} />
                  ))}
                </div>
              ) : (
                  <Image alt="default" src={cover} style={{ width: "405px", height: "540px", marginLeft: "10%" }} />
                )}
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
                    {/* <DropMenu handleChange={this.handleCompanySelection} /> */}
                  </Form.Group>
                  <Form.Group controlId="query">
                    <Form.Label>Pattern Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="query"
                      placeholder="XXXX"
                      required
                      value={this.state.query}
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