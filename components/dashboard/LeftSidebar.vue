<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <button class="py-2 px-3 rounded-full bg-covid-green text-covid-gray focus:outline-none"><i class="fa fa-virus"></i></button>
        <div class="flex flex-col ml-2">
          <h1 class="text-covid-black text-lg font-semibold">Nick Shchadov</h1>
          <h1 class="text-gray-500 -mt-1">KuJi Poscast</h1>
        </div>
      </div>
      <NLink
        v-tooltip="{ content: 'Tambah informasi', classes: 'text-xs' }"
        to="/"
        class="py-2 px-4 text-sm rounded bg-gray-200 text-gray-500 focus:outline-none"
      ><i class="fa fa-plus"></i></NLink>
    </div>
    <div class="mt-4 flex flex-col">
      <NLink
        to="/"
        class="btn"
      > <i class="fa fa-fw fa-user-md"></i> <span class="ml-3">Home</span></NLink>
      <NLink
        to="/employee"
        class="btn"
      > <i class="fa fa-fw fa-hands-wash"></i> <span class="ml-3">Employees</span></NLink>
      <NLink
        to="/invitation"
        class="btn"
      > <i class="fa fa-fw fa-temperature-high"></i> <span class="ml-3">Invotations</span></NLink>
      <NLink
        to="/schedule"
        class="btn"
      > <i class="fa fa-fw fa-shield-virus"></i> <span class="ml-3">Schedules</span></NLink>
      <NLink
        to="/profile"
        class="btn"
      > <i class="fa fa-fw fa-handshake-slash"></i> <span class="ml-3">Profile</span></NLink>
    </div>
    <div class="mt-4 flex flex-col">
      <h1 class="text-base text-gray-500 mb-2">Infomration</h1>
      <NLink
        to="/design02a"
        class="btn"
      > <i class="fa fa-fw fa-hospital-user"></i> <span class="ml-3">Rumah Sakit</span></NLink>
      <NLink
        to="/login"
        class="btn"
      > <i class="fa fa-fw fa-people-arrows"></i> <span class="ml-3">Sosial Distancing</span></NLink>
      <NLink
        to="/design02a"
        class="btn"
      > <i class="fa fa-fw fa-ambulance"></i> <span class="ml-3">Urgent</span></NLink>
      <NLink
        to="/design02b"
        class="btn"
      > <i class="fa fa-fw fa-stethoscope"></i> <span class="ml-3">Check</span></NLink>
      <NLink
        to="/design02a"
        class="btn"
      > <i class="fa fa-fw fa-microscope"></i> <span class="ml-3">Penelitian</span></NLink>
    </div>
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center">
        <button class="py-2 px-4 text-center rounded-full bg-covid-green text-covid-gray focus:outline-none"><i class="fa fa-microphone"></i></button>
        <div class="flex flex-col ml-2">
          <h1 class="text-covid-black text-lg font-semibold">Covid Tracker</h1>
          <h1 class="text-gray-500 -mt-1">ver. 0234</h1>
        </div>
      </div>
      <button
        @click="showMode = !showMode"
        class="py-1 px-4 text-sm rounded bg-gray-200 text-gray-500 focus:outline-none"
      ><i class="fa fa-ellipsis-h"></i></button>
    </div>
    <div
      v-if="showMode"
      class="flex items-center justify-center mt-2"
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
