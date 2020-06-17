
<template>
  <div class="flex flex-col mt-2 p-3 h-auto cursor-pointer dark:shadow-lg rounded-lg border border-gray-400 dark:border-gray-800 hover:bg-gray-hover dark-hover:bg-xsis-light-base">
    <div class="flex items-center justify-between">
      <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-5">
        <div>
          <label class="text-sm">Full Name:</label>
          <h1 class="nama font-medium text-lg">{{employee.fullName}}</h1>
        </div>
        <div>
          <label class="text-sm">Email:</label>
          <h1 class="nama font-medium text-lg">{{employee.email}}</h1>
        </div>
        <div>
          <label class="text-sm">Phone Number:</label>
          <h1 class="nama font-medium text-lg">{{employee.phoneNumber1}}</h1>
        </div>
        <div>
          <label class="text-sm">Natioanlity:</label>
          <h1 class="nama font-medium text-lg">{{employee.nationality}}</h1>
        </div>
      </div>
      <div class="inline-flex items-center space-x-3">
        <label class="text-sm hidden sm:block">Action:</label>
        <nuxt-link
          :to="{name:'employee-id-edit',params:{id: employee.id}}"
          v-tooltip="{ content: 'Edit Employee', classes: 'text-xs' }"
          class="btn-util-sm rounded"
        ><i class="fa fa-pencil fa-sm"></i></nuxt-link>
        <button
          @click=" deleteEmployee(employee.id)"
          v-tooltip="{ content: 'Delete Employee', classes: 'text-xs' }"
          class="py-1 px-3 text-sm rounded border border-green-secondary bg-gray-200 dark:bg-xsis-light-base text-gray-500 hover:bg-green-secondary hover:text-xsis-dark-base focus:outline-none"
        ><i class="fa fa-trash fa-sm"></i></button>
      </div>
    </div>
    <div class="flex items-center justify-between mt-4">
      <nuxt-link
        class="py-1 px-2 rounded hover:bg-gray-400"
        :to="{name:'employee-id', params: { id: employee.id}}"
      ><i class="fa fa-fw fa-mouse"></i>Click here for detail</nuxt-link>
      <div class="flex space-x-2 items-center justify-between">
        <label class="text-sm hidden sm:block">Status:</label>
        <span :class="{'text-green-secondary':employee.isComplete}"><i class="far fa-check-circle"></i></span>
        <span class="text-green-secondary"> <i class="fa fa-paperclip"></i></span>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  name: 'CardEmployee',
  methods: {
    deleteEmployee(id) {
      this.$store.dispatch('employee/deleteDataEmployee', id);
    }
  }
};
</script>

<style scoped>
</style>
