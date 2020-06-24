export const state = () => ({
   religions: [],
   identityType: [],
   maritalStatus: [],
   tipeJadwal: []
});

export const getters = {};

export const mutations = {
   SET_DATA_RELIGION: (state, data) => (state.religions = data),
   SET_DATA_IDENTITAS_TYPE: (state, data) => (state.identityType = data),
   SET_DATA_TYPE_JADWAL: (state, data) => (state.tipeJadwal = data),
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
   },
   async loadDataTypeJadwal({ commit }) {
      const response = await this.$axios.$get(`/rest-tipejadwal`);
      commit('SET_DATA_TYPE_JADWAL', response);
   }
};
