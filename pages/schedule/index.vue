<template>
  <div class="mx-auto mt-2">
    <div class="flex items-center justify-center">schedule Page</div>

    <div class="relative top-0 left-0 mx-10 h-32 bg-cst w-full rounded-lg"></div>
    <div class="bg-xsis-bg-light-primary w-full p-10 flex">
      <div class="soft-shadow mt-10 mx-auto mr-24"></div>
      <div class="soft-shadow-1 mt-10 mx-auto"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      formValues: {}
    };
  },
  methods: {
    send() {
      console.log(this.formValues);
      this.reset();
    },
    reset() {
      this.$formulate.reset('login-form');
    }
  }
};
</script>

<style scoped>
@media (min-width: 420px) {
}

.bg-cst {
  /* background-color: rgba(34, 34, 34, 0.7); */
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-cst::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background: #f1f1f1;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0.05);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.soft-shadow {
  width: 250px;
  height: 250px;
  border-radius: 25px;
  background: #f3f5f4;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0.05);
}
.soft-shadow-1 {
  width: 250px;
  height: 250px;
  border-radius: 25px;
  background: #f3f5f4;
  box-shadow: -15px -15px 10px rgba(255, 255, 255, 0.5),
    15px 15px 10px rgba(0, 0, 0, 0), inset 4px 4px 5px rgba(255, 255, 255, 0.8),
    inset -4px -4px 5px rgba(0, 0, 0, 0.05), 0 50px 40px rgba(0, 0, 0, 0.05);
}
</style>
