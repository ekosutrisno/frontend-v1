<template>
  <div class="mx-auto">
    <form>
      <input
        type="text"
        placeholder="Employee..."
        class="py-1 px-3 border-2 rounded-md bg-transparent border-green-secondary focus:outline-none focus:border-green-light"
      />
    </form>
    <input
      type="text"
      v-model="inputData"
      class="py-2 px-3 bg-xsis-light-base focus:bg-xsis-light-secondary text-xsis-dark-base rounded"
    />
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

    <div class="bg-xsis-light-primary dark:bg-gray-700">
      <span class="block">Lorem ipsum dolor sit amet.</span>
      <span class="block">Lorem ipsum dolor sit amet.</span>
      <span class="block">Lorem ipsum dolor sit amet.</span>
    </div>

    <div class="inline-flex items-center space-x-3">
      <label class="text-sm hidden sm:block">Action:</label>
      <nuxt-link
        :to="{ name: 'employee-id-edit', params: { id: employee.id } }"
        v-tooltip="{ content: 'Edit Employee', classes: 'text-xs' }"
        class="btn-util-sm rounded"
      >
        <i class="fa fa-pencil fa-sm"></i>
      </nuxt-link>
    </div>
    <!-- flex -->
    <div class="items-center justify-end mt-4 hidden">
      <div class="flex space-x-2 items-center justify-between">
        <label class="text-sm hidden sm:block">Status:</label>
        <!-- <span :class="{ 'text-green-secondary': employee.isComplete }">
          <i class="far fa-check-circle"></i>
        </span>-->
        <span class="text-green-secondary">
          <i class="fa fa-paperclip"></i>
        </span>
      </div>
    </div>//Shadow custom
    <div class="relative top-0 left-0 mx-10 h-32 bg-cst w-full rounded-lg"></div>
    <div class="bg-xsis-bg-light-primary w-full p-10 flex">
      <div class="soft-shadow mt-10 mx-auto mr-24"></div>
      <div class="soft-shadow-1 mt-10 mx-auto"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: ''
    };
  }
};
</script>

<style scoped>
@media (min-width: 420px) {
}

.bg-cst {
  /* background-color: rgba(34, 34, 34, 0.7); */
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-cst::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background: #f1f1f1;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0.05);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.soft-shadow {
  width: 250px;
  height: 250px;
  border-radius: 25px;
  background: #f3f5f4;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0.05);
}
.soft-shadow-1 {
  width: 250px;
  height: 250px;
  border-radius: 25px;
  background: #f3f5f4;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0), inset 4px 4px 5px rgba(255, 255, 255, 0.8),
    inset -4px -4px 5px rgba(0, 0, 0, 0.05), 0 50px 40px rgba(0, 0, 0, 0.05);
}
</style>
