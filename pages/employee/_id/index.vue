<template>
  <div class="mx-auto lg:mt-16">
    <BackArrow />
  </div>
</template>

<script>
import BackArrow from '@/components/dashboard/BackArrow';
export default {
  layout: 'dashboard',
  components: { BackArrow },
  created() {
    this.$store.dispatch('employee/loadSingleEmployee', this.$route.params.id);
  }
};
</script>

<style scoped>
</style>
