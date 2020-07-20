export const state = () => ({
   allInvitation: {},
   singleInvitation: {},
   singleEditInvitation: {}
});

export const getters = {};

export const mutations = {
   SET_ALL_INVITATION: (state, data) => (state.allInvitation = data),
   SET_SINGLE_INVITATION: (state, data) => (state.singleInvitation = data),
   SET_SINGLE_EDIT_INVITATION: (state, data) =>
      (state.singleEditInvitation = data)
};

export const actions = {
   async loadAllInvitation({ commit }) {
      const response = await this.$axios.$get(`/rest-undangan/page`);
      commit('SET_ALL_INVITATION', response);
   },
   async loadPagingAllUndangan({ commit }, data) {
      let size = data.size ? data.size : 10;
      let sort = data.sort ? data.sort : 'asc';

      const response = await this.$axios.$get(
         `/rest-undangan/page?sort=invitationDate,${sort}&size=${size}`
      );
      commit('SET_ALL_INVITATION', response);
   },
   async loadSingleInvitation({ commit }, idInvitation) {
      const response = await this.$axios.$get(`/rest-undangan/${idInvitation}`);
      commit('SET_SINGLE_INVITATION', response);
   },
   async loadSingleEditInvitation({ commit }, idInvitation) {
      const response = await this.$axios.$get(`/rest-undangan/${idInvitation}`);

      const dataInvitation = {
         invitationCode: response.invitationCode,
         invitationDate: response.invitationDate,
         ro: { id: response.ro.id },
         tro: { id: response.tro.id },
         scheduleTypeId: { id: response.scheduleTypeId.id },
         biodataId: { id: response.biodataId.id },
         location: response.location,
         notes: response.notes,
         otherRoTro: response.otherRoTro,
         status: response.status,
         time: response.time
      };

      commit('SET_SINGLE_EDIT_INVITATION', response);
   },
   async addDataInvitation({ dispatch }, data) {
      await this.$axios.$post(`/rest-undangan/`, data);
      dispatch("loadAllInvitation");
   },
   async updateDataInvitation({ dispatch }, data) {
      await this.$axios.$put(`/rest-undangan/${data.id}`, data.invitation);
      dispatch("loadAllInvitation");
   },
   async deleteInvitation({ dispatch }, idInvitation) {
      if (idInvitation)
         await this.$axios.$delete(`/rest-undangan/${idInvitation}`);
      else return;

      dispatch("loadAllInvitation");
   }
};
