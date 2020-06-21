<template>
  <div class="mx-auto pb-5">
    <BackArrow />
    {{this.$route.params.id}}
  </div>
</template>

<script>
import BackArrow from '@/components/dashboard/BackArrow';
export default {
  layout: 'dashboard',
  components: {
    BackArrow
  }
};
</script>

<style scoped>
</style>
