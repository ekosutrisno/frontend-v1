<template>
  <div class="mx-auto">
    <div class="flex dark:shadow-lg w-full p-3 items-center justify-between rounded-lg border border-gray-400 dark:border-gray-800">
      <div class="inline-flex items-center space-x-2">
        <FormulateInput
          name="employee"
          v-model="invitationDate"
          type="search"
          label="Search Employee"
          placeholder="Employee"
        />
        <FormulateInput
          style="margin-bottom:-3px"
          type="button"
          label="Cari"
          @click="searchInvitation"
        />
        {{invitationDate}}
      </div>
      <div class="inline-flex hidden sm:inline-flex">
        <div
          class="flex items-center mr-4"
          style="margin-bottom:1px"
        >
          <nuxt-link
            v-tooltip="{ content: 'Tambah data employee', classes: 'text-xs' }"
            :to="{name:'invitation-insert'}"
            class="py-2 px-4 rounded w-full sm:w-auto rounded-sm focus:outline-none font-medium text-gray-font bg-green-secondary hover:bg-green-light"
          ><i class="fa fa-plus"></i>
          </nuxt-link>
        </div>

        <div class="mr-4">
          <div class="mb-2 font-medium">Info page</div>
          <div class="flex flex-col items-start justify-between">
            <span class="text-xs">Page: <span class="font-semibold">{{invitations.number + 1}}</span></span>
            <span class="text-xs">Total data: <span class="font-semibold">{{invitations.totalElements}}</span></span>
          </div>
        </div>

        <div class="mr-4 inline-flex items-center space-x-2">
          <FormulateInput
            type="number"
            validation="number"
            min="1"
            label="Row of View"
            value="10"
            max="100"
            v-model.number="pages"
            placeholder="20 Rows"
          />
          <FormulateInput
            element-class="mb-0"
            type="button"
            label="Cari"
            @click="getNewDataPaging('asc')"
          />
        </div>
        <div>
          <div class="mb-2 font-medium">Sort</div>
          <div>
            <i
              v-tooltip="{ content: 'Order Ascending', classes: 'text-xs' }"
              @click="getNewDataPaging('asc')"
              class="fa fa-sort-amount-up-alt"
            >
            </i>
            <i
              v-tooltip="{ content: 'Order Descending', classes: 'text-xs' }"
              @click="getNewDataPaging('desc')"
              class="fa fa-sort-amount-down"
            >
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3">
      <div class="scr-custom-sm nl-transition lg:pr-2 overflow-y-auto h-style">
        <CardInvitation
          v-for="invitation in invitations.content"
          :key="invitation.id"
          :invitation="invitation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardInvitation from '@/components/invitation/CardInvitation';
export default {
  layout: 'dashboard',
  components: {
    CardInvitation
  },
  data() {
    return {
      invitationDate: '',
      pages: 10
    };
  },
  computed: {
    ...mapState({
      invitations: state => state.invitation.allInvitation
    })
  },
  methods: {
    getNewDataPaging(param) {
      const data = {
        size: this.pages,
        sort: param
      };
      this.$store.dispatch('invitation/loadPagingAllUndangan', data);
    },
    searchInvitation() {
      alert(this.invitationDate);
    }
  }
};
</script>

<style scoped>
.h-style {
  height: 28rem;
}
</style>
