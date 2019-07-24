
import axios from 'axios';

const ajax = axios.create({
    headers: {
        'Content-type': 'application/json'
    }
});

export default {
    //this gets called on Admin.js page.  It is suppose to load in the list of companies from the mongo database. 
    //What do I need to do to console.log a list of companies?
    getCompanies: function(query) {
        return ajax.get('/api/companies');
    },
};