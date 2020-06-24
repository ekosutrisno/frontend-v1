export default async function ({ store, from }) {
   if (!from) {
      await store.dispatch('employee/loadAllEmployee');
      await store.dispatch('invitation/loadAllInvitation');
      await store.dispatch('loadDataReligions');
      await store.dispatch('loadDataIdentityType');
      await store.dispatch('loadDataMaritalStatus');
      await store.dispatch('loadDataTypeJadwal');
   }
}
