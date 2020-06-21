
<template>
  <div class="flex flex-col mt-2 p-3 h-auto cursor-pointer dark:shadow-lg rounded-lg border border-gray-400 dark:border-gray-800 hover:bg-gray-hover dark-hover:bg-xsis-light-base">
    <LoadingCustom v-if="isLoading" />
    <div class="flex items-center justify-between">
      <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-5">
        <div>
          <label class="text-sm">Invitation Code:</label>
          <h1 class="nama font-medium text-lg">{{invitation.invitationCode}}</h1>
        </div>
        <div>
          <label class="text-sm">Email Ro:</label>
          <h1 class="nama font-medium text-lg">{{invitation.ro.eroEmail}}</h1>
        </div>
        <div>
          <label class="text-sm">Invitation Date:</label>
          <h1 class="nama font-medium text-lg">{{invitation.invitationDate}}</h1>
        </div>
        <div>
          <label class="text-sm">Invitation Time:</label>
          <h1 class="nama font-medium text-lg">{{invitation.time}}</h1>
        </div>
      </div>
      <div class="inline-flex items-center space-x-3">
        <label class="text-sm hidden sm:block">Action:</label>
        <nuxt-link
          :to="{name:'invitation-id-edit',params:{id: invitation.id}}"
          v-tooltip="{ content: 'Edit Employee', classes: 'text-xs' }"
          class="btn-util-sm rounded"
        ><i class="fa fa-pencil fa-sm"></i></nuxt-link>
        <button
          @click=" setIdDeleteInvitation(invitation.id)"
          v-tooltip="{ content: 'Delete Employee', classes: 'text-xs' }"
          class="py-1 px-3 text-sm rounded border border-green-secondary bg-gray-200 dark:bg-xsis-light-base text-gray-500 hover:bg-green-secondary hover:text-xsis-dark-base focus:outline-none"
        ><i class="fa fa-trash fa-sm"></i></button>
      </div>
    </div>
    <div class="flex items-center justify-between mt-4">
      <nuxt-link
        class="py-1 px-2 rounded hover:bg-gray-400"
        :to="{name:'invitation-id', params: { id: invitation.id}}"
      ><i class="fa fa-fw fa-mouse"></i>Click here for detail</nuxt-link>
    </div>
  </div>

</template>

<script>
import LoadingCustom from '@/components/LoadingCustom';
export default {
  props: {
    invitation: {
      type: Object,
      required: true
    }
  },
  components: { LoadingCustom },
  data() {
    return {
      isLoading: false,
      idDeleteIvitation: null
    };
  },
  name: 'CardEmployee',
  methods: {
    setIdDeleteInvitation(id) {
      this.idDeleteEmployee = id;
      this.showToas();
    },
    deleteInvitation() {
      this.$store.dispatch(
        'invitation/deleteInvitation',
        this.idDeleteEmployee
      );
      console.log('delete undangan!');
    },
    showToas() {
      this.$toasted.show('Anda akan menghapus undangan?', {
        action: [
          {
            text: 'Delete',
            onClick: (e, toastObject) => {
              this.isLoading = true;
              setTimeout(() => {
                this.deleteInvitation();
              }, 4000);
              toastObject.goAway(0);
              setTimeout(() => {
                this.isLoading = false;
                setTimeout(() => {
                  this.showInfoToas();
                }, 3000);
              }, 5000);
            }
          },
          {
            text: 'Cancel',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
              this.idDeleteEmployee = null;
            }
          }
        ],
        position: 'top-center',
        icon: 'fa-question',
        className: 'h-64',
        fitToScreen: true
      });
    },
    showInfoToas() {
      this.$toasted.show('Invitation has been deleted.', {
        action: [
          {
            text: 'Close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        ],
        position: 'bottom-right',
        icon: 'fa-info',
        duration: 3000,
        keepOnHover: true
      });
    }
  }
};
</script>

<style scoped>
</style>
