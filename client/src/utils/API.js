
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
    postCat: async function (data) {
        const response = await axios({
            method: "POST",
            url: "/api/catupload",
            data
        })
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
    },
    postPage: async function (data) {
        const response = await axios({
            method: "POST",
            url: "/api/pgupload",
            data
        })
        return response;
    },
}