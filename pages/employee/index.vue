<template>
  <div class="mx-auto mt-5 lg:mt-16">
    <div class="flex dark:shadow-lg lg:w-fixed lg:fixed p-3 items-center justify-between rounded-lg border border-gray-400 dark:border-gray-800">
      <div>
        <FormulateInput
          name="employee"
          v-model="employee"
          type="search"
          label="Search Employee"
          placeholder="Employee"
        />
        {{employee}}
      </div>
      <div class="inline-flex hidden sm:inline-flex">
        <div
          class="flex items-end mr-4"
          style="margin-bottom:1px"
        >
          <nuxt-link
            v-tooltip="{ content: 'Tambah data employee', classes: 'text-xs' }"
            :to="this.$route.path+'/insert'"
            class="py-2 px-4 rounded w-full sm:w-auto rounded-sm focus:outline-none font-medium text-gray-font bg-green-secondary hover:bg-green-light"
          ><i class="fa fa-plus"></i>
          </nuxt-link>
        </div>
        <div class="mr-4 w-24">
          <FormulateInput
            type="number"
            validation="number"
            min="10"
            label="Row of View"
            value="10"
            max="100"
            placeholder="20 Rows"
          />
        </div>
        <div>
          <div class="mb-2 font-medium">Sort</div>
          <div>
            <i
              v-tooltip="{ content: 'Order Ascending', classes: 'text-xs' }"
              @click="onClikBtn('ASC')"
              class="fa fa-sort-amount-up-alt"
            >
            </i>
            <i
              v-tooltip="{ content: 'Order Descending', classes: 'text-xs' }"
              @click="onClikBtn('DESC')"
              class="fa fa-sort-amount-down"
            >
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:pt-24">
      <div class="lg:overflow-y-auto lg:h-main scr-custom lg:pr-2 mt-2">
        <CardEmployee
          v-for="i in 10"
          :key="i"
          :employee="{id:i}"
        />
      </div>
    </div>

  </div>
</template>

<script>
import CardEmployee from '@/components/employee/CardEmployee';
export default {
  layout: 'dashboard',
  components: {
    CardEmployee
  },
  data() {
    return {
      employee: ''
    };
  },
  methods: {
    onClikBtn(pram) {
      alert(`${pram}`);
    }
  }
};
</script>

<style scoped>
.h-sayle {
  height: 31rem;
}
</style>
