<template>
  <div class="flex w-full dark:shadow-lg items-center justify-between py-2 border-b border-gray-400 dark:border-gray-800">
    <div class="text-lg font-semibold"> <span class="mr-2 far fa-fw fa-folder-open text-covid-green"></span>{{ '/' + this.$route.path.split('/', 2)[1]}}</div>
    <MegaMenuProfile />
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
