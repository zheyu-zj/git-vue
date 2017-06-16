import { announcement } from '../api/index';

const state = {
    announcement: []
};

const mutations = {
    set_announcement(state, {info}){
        state.announcement = info.data;
    }

};

const actions = {
    get_announcement({commit}){
        announcement.get_announcement().then((response) => {
            commit({
                type: 'set_announcement',
                info: response.data
            })
        })
    }
};

export default {
    state, mutations,actions
}