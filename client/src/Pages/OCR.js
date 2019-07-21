import React, { Component } from 'react';
import axios from "axios";

var Tesseract = window.Tesseract;

class UploadApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //this holds the images to upload
      uploads: [],
      patterns: [],
      documents: [],
      imgData: [],
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
    } else {
      this.setState({
        uploads: []
      })
    }
  }

  generateText = () => {
    let uploads = this.state.uploads
  
    for(var i = 0; i < uploads.length; i++) {
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
        let pattern = /\b\w{10,10}\b/g
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

  uploadPhoto = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    this.setState({
      imgData: formData
    }, ()=> console.log(this.state))
  }

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

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>My OCR App</h1>
        </header>

        { /* File uploader */}
        <section className="hero" style={{padding:"10px"}}>
          <label className="fileUploaderContainer">
            Click here to upload documents
            <input type="file" id="fileUploader" onChange={this.uploadPhoto} multiple />
          </label>



          <div>
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" alt=""/>
              
            })} 
          </div>

          <button onClick={this.APIuploadPhoto} className="button">Start Uploading</button>
        </section>

     
      </div>
    )
  }

}

export default UploadApp;