
import axios from 'axios';

export default {
    getCompanies: async function (data) {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/company",
                data: []
            })
            return response;
        } catch (error) {
            return error;
        };
    },

    //route incomplete
    searchPattern: async function (data) {
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
    },
  //What information do I need to pass to this function? Not currently working
//   postPage: async function (data) {
//         try {
//             const response = await axios({
//                 method: "POST",
//                 url: "/api/page/new",
//                 data
//             })
//             return response;
//         } catch (error) {
//             return error;
//         };
//     },
};
