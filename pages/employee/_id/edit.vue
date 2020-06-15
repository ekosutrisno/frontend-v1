<template>
  <div class="mx-auto lg:mt-16">
    <BackArrow />
    <h5>Edit {{this.$route.params.id}}</h5>
  </div>
</template>

<script>
import BackArrow from '@/components/dashboard/BackArrow';
export default { layout: 'dashboard', components: { BackArrow } };
</script>

<style scoped>
</style>
