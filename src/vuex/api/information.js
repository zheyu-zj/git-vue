import axios from 'axios';

function get_information() {
    return axios.post('/json/information.json')
};

export default {
    get_information
}