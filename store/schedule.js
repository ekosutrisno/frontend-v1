export const state = () => ({
   allSchedule: {},
   singleSchedule: {},
   singleEditSchedule: {}
});

export const getters = {};

export const mutations = {
   SET_ALL_SCHEDULE: (state, dataSchedule) => (state.allSchedule = dataSchedule),
   SET_SINGLE_SCHEDULE: (state, singleSchedule) => (state.singleSchedule = singleSchedule),
   SET_SINGLE_EDIT_SCHEDULE: (state, dataSingleEditSchedule) => (state.singleEditSchedule = dataSingleEditSchedule)
};

export const actions = {
   async loadAllSchedule({ commit }) {
      const scheduleResponse = await this.$axios.$get('/rest-rencana/page');
      commit('SET_ALL_SCHEDULE', scheduleResponse);
   },
   async loadPagingAllSchedule({ commit }, data) {
      let size = data.size ? data.size : 10;
      let sort = data.sort ? data.sort : 'asc';

      const response = await this.$axios.$get(
         `/rest-rencana/page/page?sort=invitationDate,${sort}&size=${size}`
      );
      commit('SET_ALL_SCHEDULE', response);
   },
   async loadSingleSchedule({ commit }, params) {
      const response = await this.$axios.$get(`/rest-rencana/${params}`);
      commit('SET_SINGLE_SCHEDULE', response);
   },
   async loadSingleEditSchedule({ commit }, params) {
      const response = await this.$axios.$get(`/rest-rencana/${params}`);
      commit('SET_SINGLE_EDIT_SCHEDULE', response);
   },
   async addDataSchedule({ dispatch }, schedule) {
      await this.$axios.$post(`/rest-rencana`, schedule);
      dispatch('loadAllSchedule');
   },
   async updateDataSchedule({ dispatch }, schedule) {
      await this.$axios.$put(`/rest-rencana/${schedule.id}`, schedule);
      dispatch('loadAllSchedule');
   },
   async deleteDataSchedule({ dispatch }, scheduleId) {
      await this.$axios.$put(`/rest-rencana/${scheduleId}`);
      dispatch('loadAllSchedule');
   },
};
