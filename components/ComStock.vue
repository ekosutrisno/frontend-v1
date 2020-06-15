<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="Employee..."
        class="py-1 px-3 border-2 rounded-md bg-transparent border-green-secondary focus:outline-none focus:border-green-light"
      >
    </form>

    <FormulateInput
      type="image"
      name="avatar"
      upload-url="/your/upload/directory"
      label="Your avatar"
      upload-behavior="delayed"
    />
    <FormulateInput
      type="file"
      name="fileAtachment"
      upload-url="/your/upload/directory"
      label="Your Resume"
      upload-behavior="delayed"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
