<template>
  <div class="mx-auto pb-5">
    <BackArrow />
    <div
      v-if="isLoading"
      class="absolute flex items-center justify-center inset-0 w-full h-full bg-black loading-custom"
    >
      <LoadingCustom />
    </div>
    <!-- Form invitations -->
    <div class="w-full h-custom-insert-employee p-5 lg:overflow-y-auto scr-custom lg:pr-2">
      <FormulateForm
        class="invitation-form nl-transition"
        name="invitation-form"
        v-model="dataInvitation"
        @submit="sendingData"
      >
        <div class="double-wide space-x-4">
          <FormulateInput
            name="ro"
            type="text"
            label="Full name *"
            placeholder="Your name"
            validation="required"
          />
          <FormulateInput
            name="tro"
            type="text"
            label="Nick name *"
            placeholder="Your nick name *"
            validation="required"
          />
        </div>
        <div class="w-full">
          <select
            class="py-2 w-full dark:text-gray-500 focus:outline-none focus:border-green-secondary px-3 bg-transparent rounded border border-gray-400"
            required
            v-model="dataInvitation.religions.id"
          >
            <option v-for="option in options" :key="option.id" :value="option.id">{{option.nama}}</option>
          </select>
        </div>

        <div class="double-wide space-x-4">
          <FormulateInput
            name="fullName"
            type="text"
            label="Full name *"
            placeholder="Your name"
            validation="required"
          />
          <FormulateInput
            name="nickName"
            type="text"
            label="Nick name *"
            placeholder="Your nick name *"
            validation="required"
          />
        </div>
        <div>
          <SelectComponent />
        </div>
        <div class="flex space-x-3">
          <FormulateInput type="submit" label="Kirim data" />
          <FormulateInput type="button" label="Reset data" data-ghost @click="reset" />
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BackArrow from '@/components/dashboard/BackArrow';
import LoadingCustom from '@/components/LoadingCustom';
import SelectComponent from '@/components/invitation/SelectComponent';
export default {
  layout: 'dashboard',
  components: { BackArrow, LoadingCustom, SelectComponent },
  data() {
    return {
      dataInvitation: { religions: { id: '' } },
      isLoading: false
    };
  },
  computed: {
    ...mapState({
      options: state => state.religions
    })
  },
  methods: {
    sendingData() {
      // this.$store.dispatch('employee/addDataEmployee', this.dataEmployee);
      // this.isLoading = true;
      // setTimeout(() => {
      //   this.isLoading = false;
      //   //   this.$router.push('/employee');
      //   setTimeout(() => {
      //     this.showToas();
      //   }, 3000);
      // }, 5000);
      console.log(this.dataInvitation);
    },
    reset() {
      this.$formulate.reset('invitation-form');
    },
    showToas() {
      this.$toasted.show('Data berhasil Ditambahkan', {
        action: [
          {
            text: 'Close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        ],
        position: 'top-right',
        icon: 'fa-gift',
        duration: 3000,
        keepOnHover: true
      });
    }
  }
};
</script>

<style scoped>
.invitation-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50%);
  }
}
</style>
