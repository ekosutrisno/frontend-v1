<template>
  <div class="mx-auto pb-5">
    <BackArrow />
    <div
      class="flex nl-transition flex-col mt-5 p-5 lg:mr-5 h-auto space-y-4 dark:shadow-lg rounded-lg border border-gray-400 dark:border-gray-800"
    >
      <div class="flex items-start justify-between">
        <div class="flex space-x-2 items-center justify-between">
          <span class="text-green-secondary font-semibold">
            <i class="fa fa-paperclip"></i> Biodata
          </span>
        </div>
        <div>
          <div class="inline-flex items-center space-x-3">
            <nuxt-link
              :to="{name:'employee-id-edit',params:{id: employee.id}}"
              v-tooltip="{ content: 'Edit Employee', classes: 'text-xs' }"
              class="btn-util-sm rounded"
            >
              <i class="fa fa-pencil fa-sm"></i>
            </nuxt-link>
            <div class="flex space-x-2 items-center justify-between">
              <span :class="{'text-green-secondary':employee.isComplete}">
                <i class="far fa-check-circle"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-start">
        <div class="flex items-start mb-10">
          <div class="rounded-full w-24 h-24 overflow-hidden mr-6">
            <img
              class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Profile avatar"
            />
          </div>
          <div class="block">
            <h1 class="nama font-medium text-3xl">{{employee.fullName}} / @{{employee.nickName}}</h1>
            <h1 class="nama font-medium text-lg">{{employee.email}}</h1>
            <h1
              class="nama font-medium text-sm"
            >Created: {{employee.createdOn}} | Last Modifed: {{employee.modifedOn}}</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Place of Birth</label>
          <h1 class="nama font-medium text-lg">: {{employee.pob}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Date of Birth</label>
          <h1 class="nama font-medium text-lg">: {{employee.dob}}</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Hight</label>
          <h1 class="nama font-medium text-lg">: {{employee.hight}} cm</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Weight</label>
          <h1 class="nama font-medium text-lg">: {{employee.weight}} Kg</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">GenderGender</label>
          <h1 v-if="employee.gender ==true" class="nama font-medium text-lg">: Laki-laki</h1>
          <h1 v-else-if="employee.gender ==false" class="nama font-medium text-lg">: Perempuan</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Ethnic / Suku</label>
          <h1 class="nama font-medium text-lg">: Suku {{employee.ethnic}}</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Hobby</label>
          <h1 class="nama font-medium text-lg">: {{employee.hobby}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">How Many Brothers/Sisters</label>
          <h1 class="nama font-medium text-lg">: {{employee.howManyBrothers}} Bersaudara</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Anak ke</label>
          <h1 class="nama font-medium text-lg">: {{employee.childSequence}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Natioanlity:</label>
          <h1 class="nama font-medium text-lg">: {{employee.nationality}}</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Agama</label>
          <h1
            class="nama font-medium text-lg"
          >: {{employee.religion ?employee.religion.nama:'Agama' }}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Status Pernikahan</label>
          <h1
            class="nama font-medium text-lg"
          >: {{employee.maritalStatus? employee.maritalStatus.nama:'Status'}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Tahun Menikah</label>
          <h1
            v-if="employee.marriageYear"
            class="nama font-medium text-lg"
          >: {{employee.marriageYear}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
      </div>
      <div class="flex space-x-3">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Phone Number</label>
          <h1 class="nama font-medium text-lg">: {{employee.phoneNumber1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Phone Number Backup</label>
          <h1 class="nama font-medium text-lg">: {{employee.phoneNumber2}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Parent Phone Number</label>
          <h1 class="nama font-medium text-lg">: {{employee.parentPhoneNumber}}</h1>
        </div>
      </div>
      <div class="flex items-center justify-end mt-8 space-x-3">
        <div
          class="nama py-2 px-4 rounded bg-gray-200 dark:bg-xsis-light-base dark:shadow-lg rounded-full font-medium text-lg border border-gray-400 dark:border-xsis-bd-dark-primary"
        >
          <i class="fa fa-clipboard-list fa-fw fa-sm"></i>
          {{employee.identityType?employee.identityType.nama:'ID'}} : {{employee.identityNo}}
        </div>
      </div>
    </div>
    <div
      class="flex flex-col mt-5 p-5 lg:mr-5 h-auto space-y-4 dark:shadow-lg rounded-lg border border-gray-400 dark:border-gray-800"
    >
      <div class="flex items-start justify-between">
        <div class="flex space-x-2 items-center justify-between">
          <span class="text-green-secondary font-semibold">
            <i class="fa fa-paperclip"></i> Address
          </span>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Address Asli</label>
          <h1 class="nama font-medium text-lg">: {{employee.address1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Address Domisili</label>
          <h1 class="nama font-medium text-lg">: {{employee.address2}}</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">RT Asli</label>
          <h1 class="nama font-medium text-lg">: {{employee.rt1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">RT Domisili</label>
          <h1 class="nama font-medium text-lg">: {{employee.rt2}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">RW Asli</label>
          <h1 class="nama font-medium text-lg">: {{employee.rw1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">RW Domisili</label>
          <h1 class="nama font-medium text-lg">: {{employee.rw2}}</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Kelurahan Asli</label>
          <h1 v-if="employee.kelurahan1" class="nama font-medium text-lg">: {{employee.kelurahan1}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Keluarahan Domisili</label>
          <h1 v-if="employee.kelurahan2" class="nama font-medium text-lg">: {{employee.kelurahan2}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Kecamatan Asli</label>
          <h1 v-if="employee.kecamatan1" class="nama font-medium text-lg">: {{employee.kecamatan1}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Kecamatan Domisili</label>
          <h1 v-if="employee.kecamatan2" class="nama font-medium text-lg">: {{employee.kecamatan2}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Kode Post 1</label>
          <h1 class="nama font-medium text-lg">: {{employee.postalCode1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Kode Post 2</label>
          <h1
            v-if="employee.postalCode2"
            class="nama font-medium text-lg"
          >: {{employee.postalCode2}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Region 1</label>
          <h1 class="nama font-medium text-lg">{{employee.region1}}</h1>
        </div>
        <div class="inline-flex items-center space-x-3">
          <label class="text-sm">Region 2</label>
          <h1 v-if="employee.region2" class="nama font-medium text-lg">: {{employee.region2}}</h1>
          <h1 v-else class="nama font-medium text-lg">: -</h1>
        </div>
      </div>
      <div
        class="desclimer py-2 px-4 rounded-lg bg-gray-200 dark:bg-xsis-light-base dark:shadow-lg border border-gray-400 dark:border-xsis-bd-dark-primary"
      >
        <span class="text-lg font-bold">&bull; Disclaimer:</span>
        <span
          class="text-sm font-medium"
        >Semua data yang yang dimasukkan oleh Employee sudah terverifikasi dan dapat pergunakan dengan penuh hati-hati dan tanggung jawab.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BackArrow from '@/components/dashboard/BackArrow';
import { state } from '../../../store/employee';
export default {
  layout: 'dashboard',
  components: { BackArrow },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'employee/loadSingleEmployee',
      this.$route.params.id
    );
  },
  computed: {
    ...mapState({
      employee: state => state.employee.employee
    })
  }
};
</script>

<style scoped>
</style>
