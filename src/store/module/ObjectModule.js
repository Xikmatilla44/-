import ObjectService from "../service/ObjectService";

const state = {
    listStatus: [],
    listCard: [],
    firstList:[],
    closeAbout:false

};
const getters = {};

const actions = {


    closeAbout({commit}) {
        commit('closeAb');
    },




    async PushCreate({commit}, payloads) {
        const  res =  await ObjectService.pushCreateService(payloads);
        commit('Create', res);
    },


    async getAllCardsStore({commit}) {
        const result = await ObjectService.getAllCards();
        commit('getStore', result);
    },

    async getPaginationStore({commit}) {
        const res = await ObjectService.getPagination();
        debugger
        commit('getStorePag', res);
    },

    async getSecondsPage({commit}, payload) {
        const res = await ObjectService.getSecondsPage(payload);
        debugger
        commit('getStorePag', res);
    },

};


const mutations = {

    closeAb(state){
      state.closeAbout = true;
    },

    getStorePag(state, res){
       debugger
        state.firstList = res;
    },

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
