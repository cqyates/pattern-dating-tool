//This page needs to take in the input data from Admin.js and create an object for each page uploaded as an array with company, season and year.
//This page will also get the numbers from the Tesseract.js regex pattern and push them to an array.  It will have the ability to upload images as an array
//so that each catalog can be done at the same time.

import React, { Component } from 'react';
// FIXME is this the correct way to bring in information from the Admin.js page?
//Currently breaks when I add it
// import Admin from "/Admin.js";
import axios from "axios";

var Tesseract = window.Tesseract;

class UploadApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //this holds the images to upload
      uploads: [],
      //this holds the pattern numbers that were found on the page in the regex
      patterns: [],
      //I have no idea what this holds.
      documents: [],
      //This holds the form data constructor
      imgData: [],
    };
  }

  //What is going on here?  What role does this play?
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
    } else {
      this.setState({
        uploads: []
      })
    }
  }

  //This does not appear to currently work
  generateText = () => {
    let uploads = this.state.uploads

    for (var i = 0; i < uploads.length; i++) {
      Tesseract.recognize(uploads[i], {
        lang: 'eng'
      })
        .catch(err => {
          console.error(err)
        })
        .then(result => {
          // Get Confidence score
          let confidence = result.confidence

          // Get full output
          let text = result.text

          // Get codes
          let pattern = /\b\w{4,4}\b/g
          let patterns = result.text.match(pattern);

          // Update state
          this.setState({
            patterns: this.state.patterns.concat(patterns),
            documents: this.state.documents.concat({
              pattern: patterns,
              text: text,
              confidence: confidence
            })
          })
        })
    }
  }

// does this currently work?
  uploadPhoto = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    //should I add the catalog attributes here?
    formData.append('file', file);
    console.log(formData)
    this.setState({
      imgData: formData
    }, () => console.log(this.state))
  }

  //this is the ajax call that sends the image to the back end
  //works currently but needs to go with Form Data for Company/Year/Season
  APIuploadPhoto = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/imgupload",
        data: this.state.imgData
      })

      console.log(response);
    } catch (error) {
      console.log(error.message)
    }
  }
  //The goal here is to attach the catalog attributes as FormData to each image
  //You will know that you succeeded when you look at the req.file on the backend and have the correct values
  updateForm = (e) => {
    console.log(this.state.imgData)
    let form = this.state.imgData;
    form.append("Here", "Value");
    this.setState({
      imgData: this.state.imgData.append("name", "value")
    }, ()=>console.log(this.state))
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>My OCR App</h1>
        </header>

        { /* File uploader */}
        <section className="hero">
          <label className="fileUploaderContainer">
            Click here to upload documents
    <input type="file" id="fileUploader" onChange={this.uploadPhoto} multiple />


            TEST: <input type="text" name="name" onChange={this.updateForm} />
          </label>



          <div>
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" alt="" />

            })}
          </div>

          <button onClick={this.APIuploadPhoto} className="button">Start Uploading</button>
        </section>


      </div>
    )
  }

}

export default UploadApp;