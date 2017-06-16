import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import coinList from './modules/coinList';
import allProject from './modules/allProject';
import announcement from './modules/announcement';
import dynamic from './modules/dynamic';
import information from './modules/information';

export default new Vuex.Store({
    modules: {
        coinList,
        allProject,
        announcement,
        dynamic,
        information
    }
})