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
        }
    },

    // getPatterns: async function(data){
    //     try {
    //         const response = await axios({
    //             method: "GET",
    //             url: "/api/pattern",
    //             data
    //         })
    //         return response;
    //     } catch (error) {
    //         return error;
    //     };
    // },
    
    // Gets the pattern with the given id
    getPattern: function(id) {
    return axios.get("/api/pattern/" + id);
  },
};