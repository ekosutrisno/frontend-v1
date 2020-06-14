<template>
  <div class="mx-auto">
    <div>
      <a
        href="javascript:history.back()"
        class="text-lg font-semibold"
      ><i class="fa fa-fw fa-arrow-left"></i> Back</a>
      {{this.$route.params.slug}}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
};
</script>

<style lang="scss" scoped>
</style>
