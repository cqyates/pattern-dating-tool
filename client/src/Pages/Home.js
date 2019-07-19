import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
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
                <Header />
                <Catalog />
                <Footer />
            </div>
        )
       
    }
}

export default Home;