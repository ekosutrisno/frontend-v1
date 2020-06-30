<template>
  <div class="mx-auto">
    <div class="flex space-x-4">
      <div class="shadow-xl relative w-2/3 rounded h-64 overflow-hidden">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=120"
          alt="Ilustratsi"
        />
        <NLink
          to="/employee"
          class="absolute btn-util shadow-lg rounded bottom-0 right-0 mb-8 mr-10"
        >See data for details</NLink>
      </div>
      <div class="shadow-xl w-1/3 rounded h-64 overflow-hidden">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Ilustratsi"
        />
      </div>
    </div>
    <div class="flex space-x-4 justify-between">
      <CardSmall v-for="card in cards" :key="card.id" :card="card"/>
    </div>
  </div>
</template>

<script>
import cards from '@/assets/cards';
import CardSmall from '@/components/home/CardSmall';
export default {
  layout: 'dashboard',
  components:{CardSmall},
  data: () => ({ cards: cards }),
};
</script>

<style scoped>
</style>
