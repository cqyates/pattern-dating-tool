import React, { Component } from "react";
import API from "../../utils/API";
import { Dropdown } from "react-bootstrap";
import "./style.css";

//This is a child element of both Home.js and Admin.js.  It brings in the company list as a dropdown menu. Works but the dropdown styling sucks completely
class DropMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      companies: [],
    }
  }
  // loads companies on page load. works
  componentDidMount() {
    this.getCompanies();
  }
  // calls the API call that gets all companies. works
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
        <Dropdown.Toggle variant="basic" id="dropdown-split-basic">
         {/* add a tiernary statement that will replace company with the selected company name */} Company  
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {this.state.companies.map(company => (
            <Dropdown.Item key={company._id} name="company" eventKey={company._id}>
              <p>{company.name}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>


      </Dropdown>
    )
  }
}
export default DropMenu