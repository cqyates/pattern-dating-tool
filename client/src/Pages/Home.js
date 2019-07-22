import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";


class Home extends Component {


  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, authorize admin password
    event.preventDefault();
  
  };

    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <Catalog />
                <Footer />
            </div>
        )
       
    }
}

export default Home;