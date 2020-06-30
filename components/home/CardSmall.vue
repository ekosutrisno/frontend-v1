<template>
  <div class="relative w-1/4 h-72 mt-4 shadow-xl bg-white rounded-lg overflow-hidden">
    <img class="object-cover w-full h-full" :src="card.imgUrl" />
    <div
      class="absolute flex flex-col justify-between inset-0 w-full h-72 p-5 bg-black opacity-25 transition-opacity duration-150 ease-linear hover:opacity-75 shadow-xl rounded-lg overflow-hidden"
    >
      <div class="flex items-center justify-between">
        <span class="text-white">{{card.title}}</span>
      </div>
      <div class="flex items-center justify-between">
        <span
          @click="like(card.id)"
          class="py-1 px-2 shadow-lg cursor-pointer rounded-lg bg-gray-100 text-gray-600 hover:text-pink-600"
        >
          <i class="fa fa-heart"></i>
        </span>
        <span
          @click="simpan(card.id)"
          class="py-1 px-2 shadow-lg cursor-pointer rounded-lg bg-gray-100 text-gray-600 hover:text-pink-600"
        >
          <i class="fa fa-folder-plus"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSmall',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    like(params) {
      alert(`Kamu klik tombol Suka! [${params}]`);
    },
    simpan(params) {
      alert(`Kamu klik tombol Simpan! [${params}]`);
    }
  }
};
</script>

<style scoped>
</style>
