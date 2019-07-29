
import axios from 'axios';

export default {
    getCompanies: async function (data) {
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

    // Gets the pattern with the given patternNumber
    // searchPattern: function(query) {
    //     return axios.get("/api/pattern/" + query);
    // },
    searchPattern: async function (query) {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/pattern/" + query,
                query
            })
            return response;
        } catch (error) {
            return error;
        };
    },
   
};
