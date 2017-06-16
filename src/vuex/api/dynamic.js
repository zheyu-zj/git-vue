import axios from 'axios';

function get_dynamic() {
    return axios.post('/json/dynamic.json')
};

export default {
    get_dynamic
}