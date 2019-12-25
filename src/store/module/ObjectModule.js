import ObjectService from "../service/ObjectService";

const state = {
    listStatus: [],
    listCard: [],

};
const getters = {};

const actions = {


    async PushCreate({commit}, payloads) {
        const  res =  await ObjectService.pushCreateService(payloads);
        commit('Create', res);
    },

    async getAllCardsStore({commit}) {
        const result = await ObjectService.getAllCards();
        commit('getStore', result);
    },

};


const mutations = {

   getStore(state, result){
       debugger
        state.listCard = result;
    },

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
