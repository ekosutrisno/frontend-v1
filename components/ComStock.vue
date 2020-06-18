<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="Employee..."
        class="py-1 px-3 border-2 rounded-md bg-transparent border-green-secondary focus:outline-none focus:border-green-light"
      >
    </form>

    <FormulateInput
      type="image"
      name="avatar"
      upload-url="/your/upload/directory"
      label="Your avatar"
      upload-behavior="delayed"
    />
    <FormulateInput
      type="file"
      name="fileAtachment"
      upload-url="/your/upload/directory"
      label="Your Resume"
      upload-behavior="delayed"
    />

    <div class="inline-flex items-center space-x-3 hidden">
      <label class="text-sm hidden sm:block">Action:</label>
      <nuxt-link
        :to="{name:'employee-id-edit',params:{id: employee.id}}"
        v-tooltip="{ content: 'Edit Employee', classes: 'text-xs' }"
        class="btn-util-sm rounded"
      ><i class="fa fa-pencil fa-sm"></i></nuxt-link>
    </div>
    <div class="flex items-center justify-end mt-4 hidden">
      <div class="flex space-x-2 items-center justify-between">
        <label class="text-sm hidden sm:block">Status:</label>
        <span :class="{'text-green-secondary':employee.isComplete}"><i class="far fa-check-circle"></i></span>
        <span class="text-green-secondary"> <i class="fa fa-paperclip"></i></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
