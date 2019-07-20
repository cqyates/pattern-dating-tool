import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import OCR from "./pages/OCR"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/OCR" component={OCR} />
      </div>
    </Router>
  );
}

export default App;
