<template>
  <div class="mx-auto mt-5 lg:mt-16">
    <div class="flex dark:shadow-lg lg:w-fixed lg:fixed p-3 items-center justify-between rounded-lg border border-gray-400 dark:border-gray-800">
      <div>
        <div class="mb-2">Search Employee</div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Employee..."
              class="py-1 px-3 border-2 rounded-md bg-transparent border-green-secondary focus:outline-none focus:border-green-light"
            >
          </form>
        </div>
      </div>
      <div class="inline-flex">
        <div class="mr-4">
          <div class="mb-2">View</div>
          <div>
            <input
              type="text"
              placeholder="20"
              class="py-1 px-3 border-2 w-20 rounded-md bg-transparent border-green-secondary focus:outline-none focus:border-green-light"
            >
          </div>
        </div>
        <div>
          <div class="mb-2">Sort</div>
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
        <div
          v-for="i in 10"
          :key="i"
          class="flex mt-2 p-3 h-20 dark:shadow-lg items-center justify-between rounded-lg border border-gray-400 dark:border-gray-800 hover:bg-gray-hover dark-hover:bg-xsis-light-base"
        >
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'dashboard',
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

@media only screen and (min-width: 992px) {
  .scr-custom::-webkit-scrollbar {
    width: 8px;
  }

  .scr-custom::-webkit-scrollbar-track {
    background-color: var(--border-color);
    border-radius: 6px;
  }

  .scr-custom::-webkit-scrollbar-thumb {
    background-color: var(--color);
    border-radius: 6px;
    width: 2px;
  }
}

.inp {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 0.75rem;
}
.inp:hover,
.inp:focus {
  box-shadow: 0 0 0 4px rgba(0, 197, 142, 0.9);
  outline: none;
}
</style>
