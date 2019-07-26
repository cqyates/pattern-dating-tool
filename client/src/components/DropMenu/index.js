import React, { Component } from "react";
import API from "../../utils/API";
import { Dropdown } from "react-bootstrap";
import "./style.css";


class DropMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      isSelected: false
    }
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
 
  render() {
    return (
      <Dropdown onSelect={(companyID) => {
        this.props.handleChange(companyID)
       
      }}>
        <Dropdown.Toggle variant="basic" id="dropdown-basic">
          <h7>Select Company</h7>
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