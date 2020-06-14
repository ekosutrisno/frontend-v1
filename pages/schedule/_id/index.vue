<template>
  <div>
    {{this.$router.params}}
    <nuxt-link
      class="mr-3"
      :to="{name:'employee-id', params: { id: id}}"
    >Get by Id</nuxt-link>
    <nuxt-link
      class="mr-3"
      :to="{name:'employee-id-comment', params: { id: id}}"
    >Get Single Data Comment</nuxt-link>
    <nuxt-link :to="{name:'employee-slug', params: { slug: slug}}">Get Single Data with Slug</nuxt-link>
    <a
      target="_blank"
      href="http://oc-exoapp.herokuapp.com/"
      class="shadow hover:shadow-md rounded mb-3 sm:mb-0 w-full sm:w-auto rounded-sm focus:outline-none font-medium text-gray-font px-6 py-3 bg-green-secondary hover:bg-green-light"
    >
      TESTING
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
