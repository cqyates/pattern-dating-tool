import React, { Component } from "react";
import Input from "../components/Input";
import Hero from "../components/Hero"
import { Form, Container, Row, Card, Table, ProgressBar } from "react-bootstrap";
import DropMenu from "../components/DropMenu";
import { Tesseract } from "tesseract.js";
import API from "../utils/API"
import NavBar2 from "../components/NavBar2"
// import Login from "../Pages/Login"
import fire from "../config/fire"
import axios from "axios";

class Admin extends Component {
  
  state = {
    //the image to be uploaded, used to be an array
    uploads: [],
    //this is the image as data
    imgData: [],
    //This is for tesseract
    documents: [],
    //this is the result of the regex
    patterns: [],
    catalog: {
      //this is the mongoID of the selected company
      companyID: null,
      //this is the result of the season selection
      season: "",
      //this is the result of the year selection
      year: "",
    },
    // this will be for login
    user: {},
    isLoading: false,
  }
  // This is for the admin login
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

  //this assigns a companyID number (from Mongo) when the user selects a company
  //this is passed as a prop with DropMenu.  It is called on line 141. Works
  handleCompanySelection = (companyID) => {
    this.setState(state => {
      return {
        ...state,
        catalog: {
          ...state.catalog,
          companyID: companyID
        }
      }
    })
  }

  //This function should match all the names and values in the state. Lets change this to just be season and year.
  //FIXME how to do that. I changed the way state works so it is an object for catalog with name, season and year attached to it
  //this is so that this does not interfere with the upload functions.
  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name;
    this.setState(state => {
      return {
        ...state,
        catalog: {
          ...state.catalog,
          [name]: value
        }
      }
    })
  }
  //This functions adds the files you choose to the uploads array
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
  //I think that this pushes the images to the backend as form data
  uploadPhoto = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.setState({
      imgData: formData
    }, () => console.log(this.state))
  }
  //this starts the tesseract function called inside the APIuploadPhoto
  generateText = () => {
    let upload = this.state.uploads;
    return Tesseract.recognize(upload[0], {
      lang: 'eng'
    })
  }

  //This is the main function for this page, it calls the tesseract and the uploadPhoto function
  APIuploadPhoto = async () => {
    try {
      const textGeneration = await this.generateText()
      .progress(progress => {
        this.setState({
          now: Math.floor(progress.progress * 100)
        })
      })

      let pattern = /\b\d{4}\b/g
      let patterns = textGeneration.text.match(pattern);
      console.log(patterns)

      const {data:filePath} = await axios({
        method: "POST",
        url: "/api/imgupload",
        data: this.state.imgData
      })
      console.log(filePath)

      var catalogData = {
        // companyId: this.state.catalog.companyID,
        year: this.state.catalog.year,
        season: this.state.catalog.season,
      }
      const catResp = await API.postCat(catalogData);
      
      var pageData = {
        imgURL: filePath,
        patterns: patterns,
        catalog: catResp._id,
      }
      const pageResp = await API.postPage(pageData);
    
      this.setState({
        pattern: patterns
    })
    }
    catch (error) {
      console.log(error.message)
      return error.message
    }
  }

  //Here I need to have the state displayed in the table. Add a spinner to pattern number line while tesseract is running
  render() {
    return (
      <div>
        {/* This line will only send user to login page if they are signed in */}
         {/* {this.state.user ? (<Admin />) : (<Login />)}  */}
        <NavBar2 />
        <Hero />
        <Row style={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}>
          <Container style={{ margin: "auto", width: "90%", padding: "20px" }}>
            <Card>
              <Form style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
                <DropMenu handleChange={this.handleCompanySelection} />
                <Form.Group controlId="seasonForm.ControlSelect1" style={{ marginLeft: "10px", marginRight: "20px" }}>
                  <Form.Control as="select" style={{ borderColor: "#758696", marginLeft: "10px", marginRight: "10px" }}
                    value={this.state.season} name="season" onChange={this.handleInputChange}>
                    <option>select season</option>
                    <option>fall</option>
                    <option>winter</option>
                    <option>spring</option>
                    <option>summer</option>
                  </Form.Control>
                </Form.Group>
                <Input as="text" name="year" placeholder="YYYY (required)"
                  value={this.state.year} onChange={this.handleInputChange} style={{ marginLeft: "10px", marginRight: "10px", borderColor: "#758696" }}>
                </Input>
              </Form>
              <section className="hero" style={{ padding: "10px", display:"flex"}}>
              <label className="fileUploaderContainer">
                <input type="file"
                  id="fileUploader"
                  style={{ topMargin: "10px" }}
                  onChange={this.handleChange} multiple />
              </label>
              <button onClick={this.APIuploadPhoto}
                  className="button"
                  style={{ topMargin: "10px" }}>Start Uploading</button>
            </section>
            </Card>
          </Container>
        </Row>
        <div>
          <Container style={{ margin: "auto", width: "90%", padding: "20px" }}>
            <Card>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Season</th>
                    <th>Year</th>
                    <th>Pattern Numbers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.catalog.companyID}</td>
                    <td>{this.state.catalog.season}</td>
                    <td>{this.state.catalog.year}</td>
                    <td><ProgressBar now={this.state.now} label={`${this.state.now}%`} /></td>
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