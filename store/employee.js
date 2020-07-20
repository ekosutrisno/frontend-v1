export const state = () => ({
   employees: {},
   employee: {},
   employeeSingleEdit: {},
   roAndTro: []
});

export const getters = {
};

export const mutations = {
   SET_DATA_EMPLOYEE: (state, employees) => (state.employees = employees),
   SET_SINGLE_EMPLOYEE: (state, employee) => (state.employee = employee),
   SET_SINGLE_EDIT_EMPLOYEE: (state, employeeSingleEdit) =>
      (state.employeeSingleEdit = employeeSingleEdit),
   SET_RO_TRO: (state, roAndTro) =>
      (state.roAndTro = roAndTro)
};

export const actions = {
   async loadAllEmployee({ commit }) {
      const response = await this.$axios.$get(`/rest-biodata/page?sort=id,asc`);
      commit('SET_DATA_EMPLOYEE', response);

      const roAndTro = await this.$axios.$get(`/rest-employee/ero`);
      commit('SET_RO_TRO', roAndTro);
   },
   async loadPagingAllEmployee({ commit }, data) {
      let size = data.size ? data.size : 10;
      let sort = data.sort ? data.sort : 'asc';

      const response = await this.$axios.$get(
         `/rest-biodata/page?sort=id,${sort}&size=${size}`
      );
      commit('SET_DATA_EMPLOYEE', response);
   },
   async loadSingleEmployee({ commit }, idEmployee) {
      const response = await this.$axios.$get(`/rest-biodata/${idEmployee}`);
      commit('SET_SINGLE_EMPLOYEE', response);
   },
   async loadSingleEditEmployee({ commit }, idEmployee) {
      const response = await this.$axios.$get(`/rest-biodata/${idEmployee}`);

      let gender = response.gender == true ? (gender = 1) : (gender = 2);

      const employeeSingleEdit = {
         fullName: response.fullName,
         nickName: response.nickName,
         pob: response.pob,
         dob: response.dob,
         gender: gender,
         hight: response.hight,
         weight: response.weight,
         nationality: response.nationality,
         ethnic: response.ethnic,
         hobby: response.hobby,
         email: response.email,
         identityNo: response.identityNo,
         phoneNumber1: response.phoneNumber1,
         phoneNumber2: response.phoneNumber2,
         parentPhoneNumber: response.parentPhoneNumber,
         childSequence: response.childSequence,
         howManyBrothers: response.howManyBrothers,
         companyId: response.companyId,
         address1: response.address1,
         address2: response.address2,
         postalCode1: response.postalCode1,
         postalCode2: response.postalCode2,
         rt1: response.rt1,
         rt2: response.rt2,
         rw1: response.rw1,
         rw2: response.rw2,
         kelurahan1: response.kelurahan1,
         kelurahan2: response.kelurahan2,
         region1: response.region1,
         region2: response.region2,
         maritalStatus: response.maritalStatus.id,
         identityType: response.identityType.id,
         religion: response.religion.id,
         marriageYear: response.marriageYear,
         kecamatan1: response.kecamatan1,
         kecamatan2: response.kecamatan2
      };

      commit('SET_SINGLE_EDIT_EMPLOYEE', employeeSingleEdit);
   },
   async addDataEmployee({ dispatch }, employee) {
      if (employee) await this.$axios.$post(`/rest-biodata`, employee);
      else return;

      dispatch("loadAllEmployee");
   },
   async updateDataEmployee({ dispatch }, data) {
      try {
         if (data.id && data.employee)
            await this.$axios.$put(`/rest-biodata/${data.id}`, data.employee);
         else return;

         dispatch("loadAllEmployee");
      } catch (error) {
         console.log(error);
      }
   },
   async deleteDataEmployee({ dispatch }, idEmployee) {
      if (idEmployee) await this.$axios.$delete(`/rest-biodata/${idEmployee}`);
      else return;

      dispatch("loadAllEmployee");
   }
};
