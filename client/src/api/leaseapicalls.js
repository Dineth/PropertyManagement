const axios = require('axios');

exports.getLeaseData = function(id) {
    return axios.get('https://hiring-task-api.herokuapp.com/v1/leases/' + id);
}

exports.getTenants = function(id) {
    return axios.get('https://hiring-task-api.herokuapp.com/v1/leases');
}
