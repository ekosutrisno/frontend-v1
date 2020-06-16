<template>
  <div class="mx-auto mt-4">
    <BackArrow />
    <div class="w-full h-custom-insert-employee p-5 lg:overflow-y-auto scr-custom lg:pr-2">
      <FormulateForm
        class="employee-form"
        name="employee-form"
        v-model="dataEmployee"
        @submit="sendingData"
      >
        <div class="mb-3 pb-2 border-b border-gray-400 dark:border-gray-800">
          <i class="fa fa-fw fa-exclamation-triangle"></i> Mohon Lengkapi form berikut dengan data yang benar dan dapat dipertanggung jawabkan. Tanda (*) wajib diisi.
        </div>
        <div class="mb-3 w-56 pb-2 font-semibold border-b border-gray-400 dark:border-gray-800">
          <i class="fa fa-fw fa-dot-circle fa-xs"></i> Profile Biodata
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
        <div class="double-wide space-x-4">
          <FormulateInput
            name="pob"
            type="text"
            label="Place of Birth *"
            placeholder="Your place of pirth"
            validation="required"
          />
          <FormulateInput
            name="dob"
            type="date"
            label="Date of Birth *"
            placeholder="Your date of pirth"
            validation="required"
          />
        </div>
        <div class="double-wide space-x-4">

          <FormulateInput
            name="religion"
            type="select"
            label="Agama*"
            placeholder="Islam, Hindu..."
            validation="required"
            :options="{1:'Islam',2:'Hindu',3:'Protestan',4:'Khatolik',5:'Budha',6:'Konghucu'}"
          />

          <FormulateInput
            name="maritalStatus"
            type="select"
            label="Status Pernikahan*"
            placeholder="Single"
            validation="required"
            :options="{1:'Single',2:'Menikah'}"
          />

          <FormulateInput
            name="identityType"
            type="select"
            label="Tipe Identitas*"
            placeholder="KTP, SIM..."
            validation="required"
            :options="{1:'KTP',2:'SIM',3:'PASSPORT'}"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="gender"
            type="select"
            label="Gender *"
            placeholder="Choose gender"
            validation="required"
            :options="{1:'Laki',2:'Cewe'}"
          />
          <FormulateInput
            name="nationality"
            type="text"
            label="Nationality *"
            placeholder="Your Nationality"
            validation="required"
          />

          <FormulateInput
            name="weight"
            type="number"
            label="Weight *"
            min="0"
            value="0"
            validation="required|number"
          />
          <FormulateInput
            name="hight"
            type="number"
            label="Hight *"
            min="0"
            value="0"
            validation="required|number"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="hoby"
            type="text"
            label="Hoby"
            placeholder="Your Hobi"
          />
          <FormulateInput
            name="ethnic"
            type="text"
            label="Ethnic *"
            placeholder="Your Ethnic"
            validation="required"
          />

          <FormulateInput
            name="childSequence"
            type="number"
            label="Child Sqc *"
            min="0"
            value="0"
            validation="required|number"
          />
          <FormulateInput
            name="howManyBrothers"
            type="number"
            label="Hbm *"
            min="0"
            value="0"
            placeholder="How many brother"
            validation="required|number"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="identityNo"
            type="text"
            label="Number of Identity *"
            placeholder="1609152005960001"
            validation="required"
          />
          <FormulateInput
            name="phoneNumber1"
            type="text"
            label="Phone Number 1 *"
            placeholder="Your phonenumber"
            validation="required"
          />
          <FormulateInput
            name="phoneNumber2"
            type="text"
            label="Phone Number 2"
            placeholder="Your phonenumber2"
            validation="required"
          />
          <FormulateInput
            name="parentPhoneNumber"
            type="text"
            label="Parent Phone Number *"
            placeholder="Your Parent number"
            validation="required"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="email"
            type="email"
            label="Email *"
            placeholder="ekosutrisno801@gmail.com"
            validation="required|email"
          />
          <FormulateInput
            name="companyId"
            type="select"
            label="Company *"
            validation="required"
            placeholder="Choose Your Company"
            :options="{1:'Xsis Mitra Utama',2:'Xsis Academy'}"
          />
        </div>
        <div class="mb-3 w-56 pb-2 font-semibold border-b border-gray-400 dark:border-gray-800">
          <i class="fa fa-fw fa-map-marker-alt fa-xs"></i> Address Employee
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="address1"
            type="text"
            label="Address 1 *"
            placeholder="Jakarta"
            validation="required"
          />
          <FormulateInput
            name="address2"
            type="text"
            label="Addres Domisili"
            placeholder="Bandung"
          />
          <FormulateInput
            name="kelurahan1"
            type="text"
            label="Kelurahan 1 *"
            placeholder="Your kelurahan"
            validation="required"
          />
          <FormulateInput
            name="kelurahan2"
            type="text"
            label="Keluarahan domisili"
            placeholder="Your kelurahan domisili"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="rt1"
            type="number"
            label="RT *"
            placeholder="123"
            min="0"
            validation="required|number"
          />
          <FormulateInput
            name="rt2"
            type="number"
            label="RT Domisili"
            placeholder="123"
            min="0"
            validation="number"
          />
          <FormulateInput
            name="rw1"
            type="number"
            label="RW *"
            placeholder="123"
            min="0"
            validation="required|number"
          />
          <FormulateInput
            name="rw2"
            type="number"
            label="RW Domisili"
            placeholder="123"
            min="0"
            validation="number"
          />
        </div>
        <div class="double-wide space-x-4">
          <FormulateInput
            name="postalCode1"
            type="number"
            label="Postal Code*"
            placeholder="12345"
            min="0"
            validation="required|number|max:5,length"
          />
          <FormulateInput
            name="postalCode2"
            type="number"
            label="Postal Code 2*"
            placeholder="12345"
            min="0"
            validation="number|max:5,length"
          />
          <FormulateInput
            name="region1"
            type="text"
            label="Region *"
            placeholder="Palembang Timur"
            validation="required"
          />
          <FormulateInput
            name="region2"
            type="text"
            label="Region 2"
            placeholder="Ogan Ilir"
          />
        </div>
        <div class="flex space-x-3">
          <FormulateInput
            type="submit"
            label="Kirim data"
          />
          <FormulateInput
            type="button"
            label="Reset data"
            data-ghost
            @click="reset"
          />
        </div>
      </FormulateForm>
      <div>
        {{dataEmployee}}
      </div>
    </div>

  </div>
</template>

<script>
import BackArrow from '@/components/dashboard/BackArrow';
export default {
  layout: 'dashboard',
  components: { BackArrow },
  data() {
    return {
      dataEmployee: {}
    };
  },
  methods: {
    sendingData() {
      console.log(this.dataEmployee);
    },
    reset() {
      this.$formulate.reset('employee-form');
    }
  }
};
</script>

<style scoped>
.employee-form::v-deep .formulate-input .formulate-input-element {
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
@media (min-width: 420px) {
  .four-wide {
    display: flex;
  }
  .four-wide .formulate-input {
    flex-grow: 1;
    width: calc(25% - 0.5em);
  }
  .four-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .four-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
@media only screen and (min-width: 992px) {
  .h-custom-insert-employee {
    height: 36rem;
  }
}
</style>
