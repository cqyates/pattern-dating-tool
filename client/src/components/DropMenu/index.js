//FIXME this is not working.  It is suppose to bring in the company list from the MongoDB database.  It should load with companies when it component mounts

import React, { Component } from "react";
import API from "../../utils/API";
import { Dropdown } from "react-bootstrap"
//this component will call the getCompanies api and populate a dropdown menu with the company names. Not currently working


class DropMenu extends Component {
  state = {
    //this part is not right
    companies: [],
    isSelected: false
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies() {
    API.getCompanies()
      .then(res => {
        const companyList = res.data;
        this.setState({ companies: companyList });
      })
      .catch(error => console.log(error));
  }

  // between these two divs is where the dropdown menu should go with the company list prop that is called from the mongoDB and mapped in the get companies function.
  render() {
    return (
      <Dropdown>
      <Dropdown.Toggle variant="basic" id="dropdown-basic">
      <h6>Select Company</h6>
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item {...this.state.companies}></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
  }
}
export default DropMenu