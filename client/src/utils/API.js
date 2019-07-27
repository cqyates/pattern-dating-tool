
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
  
    // gets all the patterns in the db
    // searchPatterns: async function(data) {
    //     try {
    //         const response = await axios({
    //             method: "GET",
    //             url: "/api/pattern",
    //             data
    //         })  
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // },

    // Gets the pattern with the given patternNumber
    searchPattern: async function(query) {
        return axios.get("/api/pattern/" + query);
    },

};
