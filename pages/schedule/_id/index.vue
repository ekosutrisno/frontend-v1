<template>
  <div class="mx-auto">
    <BackArrow />
    <div
      v-if="isLoading"
      class="absolute flex items-center justify-center inset-0 w-full h-full bg-black loading-custom"
    >
      <LoadingCustom />
    </div>
    <a href="http://oc-exoapp.herokuapp.com/" class="btn rounded">TESTING</a>
    {{this.$route.params.id}}
  </div>
</template>

<script>
import LoadingCustom from '@/components/LoadingCustom';
import BackArrow from '@/components/dashboard/BackArrow';
export default {
  layout: 'dashboard',
  components: { LoadingCustom, BackArrow },
  data: () => ({
    isLoading: false
  })
};
</script>

<style scoped>
</style>
