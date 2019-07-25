import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
//import API from "../utils/API/api.js" uncomment this once you make the API function, it is crashing react because it is not called


class Home extends Component {
    state={
      company: "",
      patternNumber: "",
    } 
  

  
    //I think we should move the PatternSearch Component to here
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