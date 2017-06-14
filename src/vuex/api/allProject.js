import axios from 'axios';

function get_project_list(){
    return axios.post('/json/allProject.json')
}

export default {
    get_project_list
}