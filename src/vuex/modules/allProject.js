import {allProject} from '../api/index'

//-------------------------
const state = {
    allProject : []
};

//--------------------------

const mutations = {
    set_project_list(state, {info}){
        state.allProject = info.data
        console.log(info.data)
    }
};

//---------------------------

const actions = {
    get_project_list({commit}){
        allProject.get_project_list().then(response => {
            commit({
                type: 'set_project_list',
                info: response.data
            })
        })
    }
}
export default {
    state,mutations,actions
}