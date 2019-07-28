import React, { Component } from "react";
import API from "../../utils/API";
import { Dropdown } from "react-bootstrap";
import "./style.css";

//This is a child element of both Home.js and Admin.js.  It brings in the company list as a dropdown menu. Works but the dropdown styling sucks completely
//I also want to add a place to display the selected company, but that would probably happen at the parent component
//Question what role does constructor(props), super(props) 
class DropMenu extends Component {
  constructor(props) {
    super(props)
    //this is returning a value of object object on load
    console.log("value of" + props)

    this.state = {
      companies: [],
      isSelected: false
    }
  }
  //loads companies on page load. works
  componentDidMount() {
    this.getCompanies();
  }
  //calls the API call that gets all companies. works
  getCompanies() {
    API.getCompanies()
      .then(res => {
        const companyList = res.data;
        this.setState({ companies: companyList });
      })
      .catch(error => console.log(error));
  }
  //FIXME want to add a place to display the company choosen.  
  render() {
    return (
      <Dropdown onSelect={(companyID) => {
        this.props.handleChange(companyID)
       
      }}>
        <Dropdown.Toggle variant="basic" id="dropdown-basic">
          <h6>Company</h6>
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {this.state.companies.map(company => (
            <Dropdown.Item key={company._id} eventKey={company._id}>
              <p>{company.name}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>


      </Dropdown>
    )
  }
}
export default DropMenu