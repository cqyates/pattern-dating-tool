import React, { Component } from "react";
import Input from "../components/Input";
import Hero from "../components/Hero"
import { Form, Container, Row, Col, Card, Table } from "react-bootstrap";
import DropMenu from "../components/DropMenu";
import axios from "axios";
import Tesseract from "tesseract.js";


class Admin extends Component {
  state = {
    //the image to be uploaded, used to be an array
    uploads: null,
    //this is the image as data
    imgData: [],
    //This is for tesseract
    documents: [],
    //this is the result of the regex
    patterns: [],
    //this is the mongoID of the selected company
    companyID: null,
    //this is the result of the season selection
    season: "",
    //this is the result 
    year: "",
  }
  //this assigns a companyID number (from Mongo) when the user selects a company
  //this is passed as a prop with DropMenu.  It is called on line 141
  handleCompanySelection = (companyID) => {
    this.setState({ companyID })
  }

  //This function should match all the names and values in the state. Lets change this to just be season and year
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

  }
  handleChange = (event) => {
    if (event.target.files[0]) {
      var uploads = []
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue;
        let upload = event.target.files[key]
        uploads.push(URL.createObjectURL(upload))
      }
      this.setState({
        uploads: uploads
      })
      this.uploadPhoto(event);
    } else {
      this.setState({
        uploads: []
      })
    }
  }
  uploadPhoto = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    this.setState({
      imgData: formData
    }, () => console.log(this.state))
  }

  generateText = () => {
    let upload = this.state.uploads;
    return Tesseract.recognize(upload[0], {
      lang: 'eng'
    })

  }

  APIuploadPhoto = async () => {
    try {
      const textGeneration = await this.generateText()

      let pattern = /\b\d{4}\b/g
      let patterns = textGeneration.text.match(pattern);

      this.setState({
        patterns: this.state.patterns.concat(patterns),
        documents: this.state.documents.concat({
          pattern: patterns
        })
      })
    }
    catch (error) {
      console.log(error.message)
      return error.message
    }
    try {
      const response = await axios({
        method: "POST",
        url: "/api/imgupload",
        data: this.state.imgData,
      })
      console.log(response);
    } catch (error) {
      console.log(error.message)
    }

  }

  render() {
    return (
      <div>
        <Hero />
        <Container style={{ margin: "auto", width: "90%", padding: "20px" }}>
          <Card>
            <section className="hero" style={{ padding: "10px" }}>
              <label className="fileUploaderContainer">
                Click here to upload documents<br></br>
                <input type="file"
                  id="fileUploader"
                  style={{ topMargin: "10px" }}
                  onChange={this.handleChange} multiple />
              </label>
              <button onClick={this.APIuploadPhoto}
                className="button"
                style={{ marginTop: "10px" }}>Start Uploading</button>
            </section>
            <Row style={{ padding: "10px", marginTop: "20px" }}>
              <Col style={{display:"inline"}}>
                <DropMenu handleChange={this.handleCompanySelection} />
              </Col>
              <Col style={{display:"inline"}}>
                <Form>
                  <Form.Group controlId="seasonForm">
                    <Form.Control as="select" style={{ borderColor: "#758696" }}
                      value={this.state.season} onChange={this.handleInputChange}>
                      <option>select season</option>
                      <option>fall</option>
                      <option>winter</option>
                      <option>spring</option>
                      <option>summer</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
              <Col styling={{display:"inline"}}>
                <Input as="text" name="year" placeholder="YYYY (required)"
                value={this.state.year} onChange={this.handleInputChange}></Input>
              </Col>
            </Row>
          </Card>
        </Container>
        <div>
          <Container style={{ margin: "auto", width: "90%", padding: "20px" }}>
            <Card>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Company</th>
                    <th>Season</th>
                    <th>Year</th>
                    <th>Pattern Numbers</th>
                    <th>Add</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Container>

        </div>
        <Hero />
      </div>




    )
  }
}
export default Admin;