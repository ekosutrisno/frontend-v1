<template>
  <div>
    <h1 class="text-lg font-semibold">Employee page</h1>
    <nuxt-link
      class="mr-3"
      :to="{name:'employee-id', params: { id: id}}"
    >Get by Id</nuxt-link>
    <nuxt-link
      class="mr-3"
      :to="{name:'employee-id-comment', params: { id: id}}"
    >Get Single Data Comment</nuxt-link>
    <nuxt-link :to="{name:'employee-slug', params: { slug: slug}}">Get Single Data with Slug</nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      id: 'e3T32twdT5vD',
      slug: 'eko-app'
    };
  }
};
</script>

<style scoped>
</style>
