<template>
  <div class="flex items-center justify-center hidden">
    <FormulateForm
      class="login-form"
      name="login-form"
      v-model="formValues"
      @submit="send"
    >
      <div>
        <h2 class="form-title">Register</h2>
        <p>
          You can place any elements you want inside a form. The inputs themselves
          can even be deeply nested.
        </p>
        <FormulateInput
          name="name"
          type="text"
          label="Your name"
          placeholder="Your name"
          validation="required"
        />
        <FormulateInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Email address"
          validation="required|email"
        />
        <div class="double-wide">
          <FormulateInput
            name="password"
            type="password"
            label="Password"
            placeholder="Your password"
            validation="required"
            autocomplete
          />
          <FormulateInput
            name="password_confirm"
            type="password"
            label="Confirm your password"
            placeholder="Confirm password"
            validation="required|confirm"
            validation-name="Confirmation"
            autocomplete
          />
        </div>
        <FormulateInput
          type="submit"
          label="Register"
        />
        <FormulateInput
          type="button"
          label="Reset"
          data-ghost
          @click="reset"
        />
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
    </FormulateForm>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      formValues: {}
    };
  },
  methods: {
    send() {
      console.log(this.formValues);
      this.reset();
    },
    reset() {
      this.$formulate.reset('login-form');
    }
  }
};
</script>

<style scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
</style>
