<template>
  <div class="min-h-screen">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="py-2 px-3 rounded-full bg-green-secondary text-covid-gray focus:outline-none"><i class="fa fa-home"></i></div>
        <div class="flex flex-col ml-2">
          <h1 class="text-covid-black text-lg font-semibold">Main Dashboar</h1>
          <h1 class="text-gray-500 -mt-1">Admin</h1>
        </div>
      </div>
      <NLink
        v-tooltip="{ content: 'Tambah informasi', classes: 'text-xs' }"
        to="/"
        class="py-2 px-4 text-sm rounded bg-gray-200 dark:bg-xsis-light-base text-gray-500 hover:bg-green-secondary hover:text-xsis-dark-base focus:outline-none"
      ><i class="fa fa-plus"></i></NLink>
    </div>
    <div class="mt-4 flex flex-col">
      <NLink
        to="/"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-user-md"></i> <span class="ml-3">Home</span></NLink>
      <NLink
        to="/employee"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-hands-wash"></i> <span class="ml-3">Employees</span></NLink>
      <NLink
        to="/invitation"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-temperature-high"></i> <span class="ml-3">Invotations</span></NLink>
      <NLink
        to="/schedule"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-shield-virus"></i> <span class="ml-3">Schedules</span></NLink>
      <NLink
        to="/profile"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-handshake-slash"></i> <span class="ml-3">Profile</span></NLink>
    </div>
    <div class="mt-4 flex flex-col">
      <h1 class="text-base text-gray-500 mb-2">Infomration</h1>
      <NLink
        to="/employee"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-hospital-user"></i> <span class="ml-3">Rumah Sakit</span></NLink>
      <NLink
        to="/login"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-people-arrows"></i> <span class="ml-3">Sosial Distancing</span></NLink>
      <NLink
        to="/employee"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-ambulance"></i> <span class="ml-3">Urgent</span></NLink>
      <NLink
        to="/design02b"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-stethoscope"></i> <span class="ml-3">Check</span></NLink>
      <NLink
        to="/employee"
        class="btn dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-microscope"></i> <span class="ml-3">Penelitian</span></NLink>
    </div>
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center">
        <div class="py-2 px-3 text-center rounded-full bg-green-secondary text-covid-gray focus:outline-none"><i class="fa fa-gear"></i></div>
        <div class="flex flex-col ml-2">
          <h1 class="text-covid-green text-lg font-semibold">xsis apps</h1>
          <h1 class="text-gray-500 -mt-1">ver.2.0</h1>
        </div>
      </div>
      <button
        @click="showMode = !showMode"
        v-tooltip="{ content: 'Change color mode', classes: 'text-xs' }"
        class="py-1 px-4 text-sm rounded bg-gray-200 dark:bg-xsis-light-base text-gray-500 hover:bg-green-secondary hover:text-xsis-dark-base focus:outline-none"
      ><i class="fa fa-ellipsis-h"></i></button>
    </div>
    <div
      v-if="showMode"
      class="flex nl-transition items-center justify-center mt-2"
    >
      <ColorModePicker />
    </div>
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker';
export default {
  name: 'LeftSidebar',
  components: { ColorModePicker },
  data() {
    return {
      showMode: false
    };
  }
};
</script>

<style scoped>
</style>
