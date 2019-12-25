import Vue from 'vue';
import Vuex from 'vuex';
import { ObjectModule } from "./module/ObjectModule";



Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        ObjectModule
    }
})

export default store;
