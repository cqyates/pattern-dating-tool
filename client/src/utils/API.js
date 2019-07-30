
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
    //this API call works I am getting the req.body object coming through on the routes page.
    postCat: async function (data) {
        const response = await axios({
            method: "POST",
            url: "/api/catupload",
            data
        })
        console.log(response);
        return response;
    },
    sendImage: async function (data) {
        const imgResp = await axios({
            method: "POST",
            url: "/api/imgupload",
            data
        })
        console.log(imgResp);
        return imgResp;
    }
}