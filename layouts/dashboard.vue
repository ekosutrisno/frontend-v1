<template>
  <div class="flex mx-auto font-sans text">
    <div class="hidden fixed nl-transition lg:block p-5 w-70 flex-none border-r-2 border-gray-300 dark:border-gray-800">
      <LeftSidebar />
    </div>
    <div class="flex-1 w-screen mx-auto lg:ml-70 p-6 pb-20 lg:pb-0 lg:pt-0">
      <HeaderMainTop />
      <div class="pr-2 lg:pr-0 lg:h-custom-two h-custom-one overflow-y-auto scr-custom-sm">
        <nuxt />
      </div>
    </div>
    <NavbarFooter />
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
.scr::-webkit-scrollbar {
  width: 12px;
}

.scr::-webkit-scrollbar-track {
  background-color: #f8d57e;
  border-radius: 10px;
}

.scr::-webkit-scrollbar-thumb {
  background-color: #35495e;
  border-radius: 10px;
  width: 5px;
}
</style>
