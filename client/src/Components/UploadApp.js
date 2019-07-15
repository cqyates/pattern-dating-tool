import React, { Component } from 'react';
import axios from "axios";

class UploadApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: [],
      patterns: [],
      documents: [],
      imgData: []
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
        <section className="hero">
          <label className="fileUploaderContainer">
            Click here to upload documents
    <input type="file" id="fileUploader" onChange={this.uploadPhoto} multiple />
          </label>



          <div>
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" />
            })}
          </div>

          <button onClick={this.APIuploadPhoto} className="button">Start Uploading</button>
        </section>

     
      </div>
    )
  }

}

export default UploadApp;