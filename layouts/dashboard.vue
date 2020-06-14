<template>
  <div class="min-h-screen">
    <div class="flex mx-auto overflow-hidden font-sans text">
      <div class="hidden fixed nl-transition lg:block p-5 w-70 flex-none border-r-2 border-gray-300 dark:border-gray-800">
        <LeftSidebar />
      </div>
      <div class="flex-1 mx-auto lg:ml-70 p-6 overflow-y-auto pt-10 pb-20 lg:pb-8 lg:pt-0">
        <HeaderMainTop />
        <nuxt />
      </div>
      <NavbarFooter />
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/dashboard/LeftSidebar';
import NavbarFooter from '@/components/dashboard/NavbarFooter';
import HeaderMainTop from '@/components/dashboard/HeaderMainTop';

export default {
  name: 'dashboard',
  components: { LeftSidebar, NavbarFooter, HeaderMainTop }
};
</script>
<style>
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
