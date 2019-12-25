import ObjectService from "../service/ObjectService";

const state = {
    listStatus: [],

};
const getters = {};

const actions = {


    async PushCreate({commit}, payloads) {
        const  res =  await ObjectService.pushCreateService(payloads);
        commit('Create', res);
    },

};


const mutations = {


    Create(state, res){
        // debugger
        state.listStatus= res;
    },



};

export const ObjectModule = {

    namespaced: true,
    state,
    actions,
    mutations,
    getters


};
