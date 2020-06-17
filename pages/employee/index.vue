<template>
  <div class="mx-auto mt-5 overflow-y-auto">
    <div class="flex dark:shadow-lg w-full p-3 items-center justify-between rounded-lg border border-gray-400 dark:border-gray-800">
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
            :to="{name:'employee-insert'}"
            class="py-2 px-4 rounded w-full sm:w-auto rounded-sm focus:outline-none font-medium text-gray-font bg-green-secondary hover:bg-green-light"
          ><i class="fa fa-plus"></i>
          </nuxt-link>
        </div>

        <div class="mr-4">
          <div class="mb-2 font-medium">Info page</div>
          <div class="flex flex-col items-start justify-between">
            <span class="text-xs">Page: <span class="font-semibold">{{employees.number + 1}}</span></span>
            <span class="text-xs">Total data: <span class="font-semibold">{{employees.totalElements}}</span></span>
          </div>
        </div>

        <div class="mr-4 w-24">
          <FormulateInput
            type="number"
            validation="number"
            min="10"
            label="Row of View"
            value="10"
            max="100"
            v-model.number="pages"
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
    <div class="pt-3">
      <div
        class="scr-custom-sm nl-transition lg:pr-2 mt-2 overflow-y-auto"
        style="height:30rem"
      >
        <CardEmployee
          v-for="employee in employees.content"
          :key="employee.id"
          :employee="employee"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardEmployee from '@/components/employee/CardEmployee';
export default {
  layout: 'dashboard',
  components: {
    CardEmployee
  },
  data() {
    return {
      employee: '',
      pages: 10
    };
  },
  computed: {
    ...mapState({
      employees: state => state.employee.employees
    })
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
