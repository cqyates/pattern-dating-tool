import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import API from "../utils/API/api.js";


class Home extends Component {
    state={
      company: "",
      patternNumber: "",
    } 
  }

  searchPatterns 

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