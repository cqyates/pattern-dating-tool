import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API/api";
import dropdown from "react-bootstrap-dropdown-menu";

//this component will call the getCompanies api and populate a dropdown menu with the company names.


class Dropdown extends Component {
    state = {
        //this array will hold the list of companies from the API call
        companies = [],
        isSelected = false
    }

    componentDidMount() {
        this.getCompanies();
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    }

    getCompanies(query) {
        API.getCompanies(query)
          .then(res => {
            //This console.log is not getting hit.
            console.log(res)
            const companyList = res.data.map(b => {
              return {
                companyList
              };
            });
            this.setState({ companies: companyList });
          })
          .catch(error => console.log(error));
      }

      render() {
        return (
          <div>
           <dropdown.toggle companyList={this.state.companies}>
            </dropdown.toggle>
          </div>
        )
      }
}