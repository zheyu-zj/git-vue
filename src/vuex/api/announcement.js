import axios from 'axios';

function get_announcement(){
    return axios.post('/json/announcement.json')
}

export default {
    get_announcement
}