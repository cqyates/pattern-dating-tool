
import axios from 'axios';

const ajax = axios.create({
    headers: {
        'Content-type': 'application/json'
    }
});

export default {
    //this gets called on Admin.js page.  It is suppose to load in the list of companies from the mongo database.
    getCompanies: function(query) {
        return ajax.get('/api/companies');
    },
};