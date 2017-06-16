import { information } from '../api/index';

const state = {
    information:[]
};

const mutations = {
    set_information(state, {info}){
        state.information = info.data;
    }
};

const actions = {
    get_information({commit}){
        information.get_information().then(response => {
            commit({
                type:'set_information',
                info:response.data
            })
        })
    }
};

export default {
    state, mutations, actions
}