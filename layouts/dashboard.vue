<template>
  <div class="min-h-screen">
    <div class="flex mx-auto h-screen overflow-hidden font-sans text">
      <div class="hidden nl-transition lg:block p-5 w-70 flex-none border-r-2 border-gray-300 dark:border-gray-800">
        <LeftSidebar />
      </div>
      <div class="flex-1 p-6">
        <nuxt />
      </div>
      <NavbarFooter />
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/dashboard/LeftSidebar';
import NavbarFooter from '@/components/dashboard/NavbarFooter';

export default {
  name: 'dashboard',
  components: { LeftSidebar, NavbarFooter }
};
</script>
<style scoped>
.h-custom {
  height: 95vh;
}
.shadow-custom {
  box-shadow: 0 10px 12px rgba(20, 31, 56, 0.05);
}
.nl-transition {
  animation: 0.5s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
