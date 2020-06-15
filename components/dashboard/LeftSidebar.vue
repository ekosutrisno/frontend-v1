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
        to="/home"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-home"></i> <span class="ml-3">Home</span></NLink>
      <NLink
        to="/employee"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-user-astronaut"></i> <span class="ml-3">Employees</span></NLink>
      <NLink
        to="/invitation"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-envelope-open-text"></i> <span class="ml-3">Invitations</span></NLink>
      <NLink
        to="/schedule"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-clipboard-list"></i> <span class="ml-3">Schedules</span></NLink>
      <NLink
        to="/profile"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="far fa-fw fa-user-circle"></i> <span class="ml-3">Profile</span></NLink>
    </div>
    <div class="mt-4 flex flex-col">
      <h1 class="text-base text-gray-500 mb-2">Company Info</h1>
      <NLink
        to="/account"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-hand-holding-usd"></i> <span class="ml-3">Accountant</span></NLink>
      <NLink
        to="/marketing"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-store"></i> <span class="ml-3">Marketing</span></NLink>
      <NLink
        to="/administration"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-people-carry"></i> <span class="ml-3">Administrations</span></NLink>
      <NLink
        to="/approval"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-calendar-check"></i> <span class="ml-3">Approval</span></NLink>
      <NLink
        to="/staf"
        class="btn rounded w-full dark:text-xsis-dark-base"
      > <i class="fa fa-fw fa-user-tag"></i> <span class="ml-3">Staf and Trainer</span></NLink>
    </div>
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center">
        <div class="py-2 px-3 text-center rounded-full bg-green-secondary text-covid-gray focus:outline-none"><i class="fa fa-gear"></i></div>
        <div class="flex flex-col ml-2">
          <h1 class="text-covid-green text-lg font-semibold">eksho app</h1>
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
