import { dynamic } from '../api/index';

const state = {
    dynamic:[]
};

const mutations = {
    set_dynamic(state, {info}){
        state.dynamic = info.data;
    }
};

const actions = {
    get_dynamic({commit}){
        dynamic.get_dynamic().then(response => {
            commit({
                type:'set_dynamic',
                info:response.data
            })
        })
    }
};

export default {
    state, mutations, actions
}