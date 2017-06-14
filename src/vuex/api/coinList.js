import axios from 'axios';

//--------------------------------------------
function get_coin_list(){
    return axios.post('/json/allInformation.json');
}



//--------------------------------------------

export default {
    get_coin_list
}