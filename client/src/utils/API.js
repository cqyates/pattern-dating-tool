
import axios from 'axios';

export default {
    //works
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

    // this function should be passing the state from the Admin.js page to the backend so it can be added to the database
    //It is not currently working probably because I am passing the data wrong, saving for tutorial tomorrow
    postPage: async function (data) {
            const response = await axios({
                method: "POST",
                url: "/api/pgupload",
                data
            })
            console.log(response);
            return response;
    }
}