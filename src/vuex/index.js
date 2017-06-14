import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import coinList from './modules/coinList';
import allProject from './modules/allProject';

export default new Vuex.Store({
    modules: {
        coinList,
        allProject
    }
})