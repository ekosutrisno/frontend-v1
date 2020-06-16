export const state = () => ({
   employees: [],
   employee: {}
});

export const getters = {
   banyakDataEmployee: state => state.employees.length
};

export const mutations = {
   SET_DATA_EMPLOYEE: (state, employees) => (state.employees = employees),
   SET_SINGLE_EMPLOYEE: (state, employee) => (state.employee = employee)
};

export const actions = {
   async loadAllEmployee({ commit }) {
      const response = await this.$axios.$get(
         `https://jsonplaceholder.typicode.com/users`
      );
      commit('SET_DATA_EMPLOYEE', response);
   },
   async loadSingleEmployee({ commit }, idEmployee) {
      const response = await this.$axios.$get(
         `https://jsonplaceholder.typicode.com/users/${idEmployee}`
      );
      commit('SET_SINGLE_EMPLOYEE', response);
   }
};
