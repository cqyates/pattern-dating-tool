
import axios from 'axios';

const ajax = axios.create({
    headers: {
        'Content-type': 'application/json'
    }
});

export default {
    //this gets called on Admin.js page.  It is suppose to load in the list of companies from the mongo database. 
    //where does it go from here?
    getCompanies: async function(data){
      try {
          const response = await axios({
              method: "POST",
              url: "/api/catalog",
              data
          })
          return response;
      } catch (error) {
          return error;
      };
  },
};