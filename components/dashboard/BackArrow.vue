<template>
  <button
    @click="back"
    class="text-base font-bold focus:outline-none text-green-secondary hover:text-green-light"
  >
    <i class="fa fa-fw fa-arrow-left"></i> Back
  </button>
</template>
<script>
export default {
  name: 'BackArrow',
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
