import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import OCR from "./Pages/OCR";
import Login from "./Pages/Login"
import "./App.css"

function App () { 
      return (
        <div className="App">
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/OCR" component={OCR} />
            <Route exact path="/login" component={Login} /> 
        </Router>
      </div>
    );
  }

export default App;
