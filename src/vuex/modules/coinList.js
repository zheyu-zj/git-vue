import { coinList } from '../api/index';

//----------------------------------------

const state = {
    coinList : []
};

//----------------------------------------

const  mutations = {
    set_coin_list(state, {info}){
        state.coinList = info.data;
    }
};

//----------------------------------------

const actions = {
    get_coin_list({commit}){
        coinList.get_coin_list().then(response => {
            commit({
                type : 'set_coin_list',
                info : response.data
            })
        })
    }

};

//----------------------------------------

export default {
    state, mutations, actions
}