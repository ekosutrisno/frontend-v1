<template>
  <div class="mx-auto pb-5">
    <BackArrow />
    <div
      class="flex nl-transition flex-col mt-5 p-5 lg:mr-5 h-auto space-y-4 dark:shadow-lg rounded-lg border border-gray-400 dark:border-gray-800"
    >
      <div class="flex items-start justify-between">
        <div class="flex space-x-2 items-center justify-between">
          <span class="text-green-secondary font-semibold">
            <i class="fa fa-paperclip"></i> Invitation
          </span>
        </div>
        <div>
          <div class="inline-flex items-center space-x-3">
            <nuxt-link
              :to="{name:'invitation-id-edit',params:{id: invitation.id}}"
              v-tooltip="{ content: 'Edit Invitation', classes: 'text-xs' }"
              class="btn-util-sm rounded"
            >
              <i class="fa fa-pencil fa-sm"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-start">
        <div class="flex items-start mb-5">
          <div
            class="rounded-full w-24 h-24 mr-6 border-2 border-gray-400 dark:border-xsis-light-base overflow-hidden"
          >
            <img
              class="w-full h-full object-cover"
              src="https://image.freepik.com/free-vector/email-envelope-concept_34259-135.jpg"
              alt="mail-logo"
            />
          </div>
          <div
            class="block py-2 px-4 rounded-lg dark:bg-xsis-light-base dark:shadow-lg dark:border dark:border-xsis-bd-dark-primary"
          >
            <h1
              class="nama font-medium text-3xl"
            >{{invitation.invitationCode}} | {{invitation.scheduleTypeId?invitation.scheduleTypeId.nama:'Invitation Code'}}</h1>
            <h1
              class="nama font-medium text-sm"
            >Created: {{invitation.createdOn}} | Last Modifed: {{invitation.modifedOn ? invitation.modifedOn : ' -'}}</h1>
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-1/2">
          <div class="flex flex-col">
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">RO Name</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.ro ? invitation.ro.biodataId.fullName:' -'}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">RO Email</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.ro ? invitation.ro.eroEmail: ' -'}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3 mt-4">
              <label class="text-sm">TRO Name</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.tro ? invitation.tro.biodataId.fullName:' -'}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">TRO Email</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.tro ? invitation.tro.eroEmail:' -'}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3 mt-4">
              <label class="text-sm">Other RO Name</label>
              <h1 class="nama font-medium text-lg">: {{invitation.otherRoTro}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3 mt-4">
              <label class="text-sm">To Employee</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.biodataId ? invitation.biodataId.fullName:' -'}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">To Employee Email</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.biodataId ? invitation.biodataId.email:' -'}}</h1>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex flex-col">
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">Date & Time</label>
              <h1
                class="nama font-medium text-lg"
              >: {{invitation.invitationDate}} {{invitation.time}}</h1>
            </div>
            <div class="inline-flex items-center space-x-3">
              <label class="text-sm">Location</label>
              <h1 class="nama font-medium text-lg">: {{invitation.location}}</h1>
            </div>
          </div>
          <div
            class="desclimer mt-8 py-2 px-4 rounded-lg bg-gray-200 dark:bg-xsis-light-base dark:shadow-lg border border-gray-400 dark:border-xsis-bd-dark-primary"
          >
            <span class="text-lg font-bold">&bull; Notes:</span>
            <span class="text-sm font-medium">{{invitation.notes}}</span>
          </div>
          <div
            class="desclimer mt-3 py-2 px-4 rounded-lg bg-green-light dark:bg-green-secondary dark:shadow-lg"
          >
            <span class="text-lg font-bold">&bull; Status:</span>
            <span class="text-sm font-medium">{{invitation.status}}</span>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <nuxt-link
          :to="{name:'employee-id',params:{id:invitation.biodataId ? invitation.biodataId.id:''}}"
          class="btn-util rounded w-auto"
        >
          <i class="fa fa-fw fa-search"></i> See Detail Employee
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BackArrow from '@/components/dashboard/BackArrow';

export default {
  layout: 'dashboard',
  components: { BackArrow },
  async fetch() {
    await this.$store.dispatch(
      'invitation/loadSingleInvitation',
      this.$route.params.id
    );
  },
  computed: {
    ...mapState({
      invitation: state => state.invitation.singleInvitation
    })
  }
};
</script>

<style scoped>
</style>
