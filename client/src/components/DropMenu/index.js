//FIXME this is not working.  It is suppose to bring in the company list from the MongoDB database.  It should load with companies when it component mounts

import React, { Component } from "react";
import API from "../../utils/API/api";
// import dropdown from "react-bootstrap";

//this component will call the getCompanies api and populate a dropdown menu with the company names. Not currently working


class DropMenu extends Component {
    state = {
       //this part is not right
        // companies,
        // isSelected
    }

    componentDidMount() {
        this.getCompanies();
    }


    // FIXME not sure about the query param.
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

// between these two divs is where the dropdown menu should go with the company list prop that is called from the mongoDB and mapped in the get companies function.
      render() {
        return (
          <div>
           
          </div>
        )
      }
}

export default DropMenu;