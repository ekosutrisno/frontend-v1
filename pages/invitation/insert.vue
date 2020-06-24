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
        <div class="mb-3 pb-2 border-b border-gray-400 dark:border-gray-800">
          <span class="block">
            <i class="fa fa-fw fa-exclamation-triangle"></i> Mohon Lengkapi
            <span
              class="px-1 text-xs border border-green-secondary font-semibold rounded"
            >form add Invitation</span> berikut dengan data yang benar dan dapat dipertanggung jawabkan. Tanda
            <span
              class="text-red-400 font-semibold"
            >(*)</span> wajib diisi.
          </span>
        </div>
        <div class="mb-3 w-56 pb-2 font-semibold border-b border-gray-400 dark:border-gray-800">
          <i class="fa fa-fw fa-dot-circle fa-xs"></i> Detail Data Invitation
        </div>
        <div class="double-wide space-x-4 mb-4">
          <v-select
            class="w-full style-chooser"
            v-model.number="dataInvitation.ro.id"
            :required="!dataInvitation.ro.id"
            :reduce="ro=>ro.id"
            placeholder="Choose Ro*"
            label="eroEmail"
            :options="roAndTro"
          ></v-select>
          <v-select
            class="w-full style-chooser"
            v-model.number="dataInvitation.tro.id"
            :required="!dataInvitation.tro.id"
            :reduce="tro=>tro.id"
            placeholder="Choose Tro*"
            label="eroEmail"
            :options="roAndTro"
          ></v-select>
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="invitationDate"
            type="date"
            label="Choose Invitation Date *"
            validation="required"
          />
          <FormulateInput
            name="time"
            type="time"
            label="Choose time Invitation *"
            validation="required"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="otherRoTro"
            type="text"
            label="Other Ro / Tro *"
            placeholder="Other Ro/Tro"
          />
          <FormulateInput
            name="location"
            type="text"
            label="Location Invitation *"
            placeholder="Location *"
            validation="required"
          />
        </div>
        <div class="double-wide space-x-4 mb-4">
          <v-select
            class="w-full style-chooser"
            v-model.number="dataInvitation.scheduleTypeId.id"
            :required="!scheduleType.id"
            :reduce="scheduleType=>scheduleType.id"
            placeholder="Choose Schedule Type*"
            label="nama"
            :options="scheduleType"
          ></v-select>

          <v-select
            class="w-full style-chooser"
            v-model.number="dataInvitation.biodataId.id"
            :required="!dataInvitation.biodataId"
            :reduce="biodataId=>biodataId.id"
            placeholder="Choose Employee*"
            label="fullName"
            :options="biodata.content"
          ></v-select>
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="status"
            type="textarea"
            label="Status *"
            placeholder="Isikan status atau proses saat ini... *"
            validation="required"
          />
          <FormulateInput
            name="notes"
            type="textarea"
            label="Notes *"
            placeholder="Tuliskan catatan untuk penerima invitation... *"
          />
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
export default {
  layout: 'dashboard',
  components: { BackArrow, LoadingCustom },
  data() {
    return {
      dataInvitation: {
        ro: { id: '' },
        tro: { id: '' },
        scheduleTypeId: { id: '' },
        biodataId: { id: '' }
      },
      isLoading: false
    };
  },
  computed: {
    ...mapState({
      roAndTro: state => state.employee.roAndTro,
      scheduleType: state => state.tipeJadwal,
      biodata: state => state.employee.employees
    })
  },
  methods: {
    sendingData() {
      if (this.cekValid()) {
        return;
      } else {
        this.$store.dispatch(
          'invitation/addDataInvitation',
          this.dataInvitation
        );
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.$router.push('/invitation');
          setTimeout(() => {
            this.showToas();
          }, 3000);
        }, 5000);
      }
    },
    reset() {
      this.$formulate.reset('invitation-form');
      this.resIdObjectIndataInvitation();
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
    },
    resIdObjectIndataInvitation() {
      this.dataInvitation.ro.id = null;
      this.dataInvitation.tro.id = null;
      this.dataInvitation.scheduleTypeId.id = null;
      this.dataInvitation.biodataId.id = null;
    },
    cekValid() {
      return (
        this.dataInvitation.ro.id == '' &&
        this.dataInvitation.tro.id == '' &&
        this.dataInvitation.scheduleTypeId.id == '' &&
        this.dataInvitation.biodataId.id == ''
      );
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
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
