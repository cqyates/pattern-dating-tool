
import axios from 'axios';

export default {
  getCompanies: async function(data){
    try {
        const response = await axios({
            method: "GET",
            url: "/api/company",
            data
        })
        return response;
    } catch (error) {
        return error;
    };
},
   
    //route incomplete
  searchPattern: async function(data) {
      try {
          const response = await axios({
              method: "GET",
              url: "/api/pattern",
              data
          })  
          return response;
      } catch (error) {
        return error;
      }
  }
};