import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import OCR from "./Pages/OCR";
import Login from "./Pages/Login"
import fire from "./config/fire"
import "./App.css"

class App extends Component { 
  constructor(){
    super();
    this.state = ({
      user:null
    })
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
    render(){
      return (
        <div className="App">
         
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/OCR" component={OCR} />
            <Route path="/login" component={Login} /> 
        </Router>
      </div>
    );
  }
}

export default App;
