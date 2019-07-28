import React, { Component } from 'react';
import axios from "axios";
import Tesseract from "tesseract.js";

class UploadApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: null,
      imgData: [],
      documents: [],
      patterns: [],
    };
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
        patterns: this.state.patterns,
        companyID: this.state.companyID,
        season: this.state.season,
        year: this.state.year
      })
      console.log(response);
    } catch (error) {
      console.log(error.message)
    }

  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h4>My OCR App</h4>
        </header>

        { /* File uploader */}
        <section className="hero" style={{ padding: "10px" }}>
          <label className="fileUploaderContainer">
            Click here to upload documents<br></br>
            <input type="file"
              id="fileUploader"
              style={{ topMargin: "10px" }}
              onChange={this.handleChange} multiple />
          </label>
          <div>
            <small><strong>Pattern Output:</strong> {this.state.patterns.map((patterns) => { return patterns + ', ' })}</small>
          </div>
          <button onClick={this.APIuploadPhoto}
            className="button"
            style={{ marginTop: "10px" }}>Start Uploading</button>
        </section>


      </div>
    )
  }

}

export default UploadApp;