<template>
  <div class="mx-auto">
    <BackArrow />
    <div
      v-if="isLoading"
      class="absolute flex items-center justify-center inset-0 w-full h-full bg-black loading-custom"
    >
      <LoadingCustom />
    </div>
    <p class="font-semibold text-2xl text-pink-700">Edit Page</p>
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
