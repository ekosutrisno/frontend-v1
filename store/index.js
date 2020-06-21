export const state = () => ({
   religions: [],
   identityType: [],
   maritalStatus: []
});

export const getters = {};

export const mutations = {
   SET_DATA_RELIGION: (state, data) => (state.religions = data),
   SET_DATA_IDENTITAS_TYPE: (state, data) => (state.identityType = data),
   SET_DATA_MARITAL_STATUS: (state, data) => (state.maritalStatus = data)
};

export const actions = {
   async loadDataReligions({ commit }) {
      const response = await this.$axios.$get(`/rest-agama`);
      commit('SET_DATA_RELIGION', response);
   },
   async loadDataIdentityType({ commit }) {
      const response = await this.$axios.$get(`/rest-identitas`);
      commit('SET_DATA_IDENTITAS_TYPE', response);
   },
   async loadDataMaritalStatus({ commit }) {
      const response = await this.$axios.$get(`/rest-status`);
      commit('SET_DATA_MARITAL_STATUS', response);
   }
};
