<template>
  <div class="flex lg:w-fixed lg:fixed dark:shadow-lg items-center justify-between py-2 border-b border-gray-400 dark:border-gray-800">
    <div class="text-lg font-semibold"> <span class="mr-2 far fa-fw fa-folder-open text-covid-green"></span>{{ '/' + this.$route.path.split('/', 2)[1]}}</div>
    <div class="relative">
      <Button
        @click="openMenu = !openMenu"
        class="inline-flex items-center space-x-1 focus:outline-none transition-opacity duration-200 ease-linear opacity-75 hover:opacity-100"
      >
        <div class="text-lg font-semibold"> {{ this.$route.path.split('/', 2)[1]}}</div>
        <div class="rounded-full w-8 h-8 overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Profile avatar"
          >
        </div>
        <span class="text-gray-500"><i class="fa fa-caret-down"></i></span>
      </Button>
    </div>
  </div>

</template>

<script>
import MegaMenuProfile from '@/components/dashboard/MegaMenuProfile';
export default {
  components: { MegaMenuProfile },
  data() {
    return {
      openMenu: false
    };
  }
};
</script>

<style scoped>
.mb-cs {
  margin-bottom: -19rem;
}
</style>
