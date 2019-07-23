import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse:""};
  }

  callAPI() {
    fetch("http://localhost:3001/api")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }


    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <Catalog />
                <Footer />
                <p className="App-intro">;{this.state.apiResponse}</p>
            </div>
        )
       
    }
}

export default Home;