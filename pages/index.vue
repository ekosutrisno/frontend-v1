<template>
  <div class="container font-sans">
    <div>
      <logo />
      <h1 class="title">
        xsisv20
      </h1>
      <h2 class="subtitle">
        Refaktor Xsis v2.0 Using Vue Js Frontend
      </h2>
      <div class="my-3 flex justify-center">
        <ColorModePicker />
      </div>
      <div class="links">
        <nuxt-link
          to="/"
          class="button--green"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/employee"
          class="button--green"
          v-tooltip="{ content: 'Go to employee page', classes: 'text-sm' }"
        >
          Employee <i class="fa fa-fw fa-user-graduate"></i>
        </nuxt-link>
        <button
          @click="showToas"
          class="button--grey focus:outline-none"
          v-tooltip="{ content: 'Testing Toas', classes: 'text-sm' }"
        >
          Testing Toas
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import ColorModePicker from '@/components/ColorModePicker.vue';

export default {
  components: {
    Logo,
    ColorModePicker
  },
  methods: {
    showToas() {
      this.$toasted.show('Terjadi kesalahan pada saat Cek', {
        action: [
          {
            text: 'Cancel',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          {
            text: 'Go to employee',
            onClick: (e, toastObject) => {
              this.$router.push('/employee');
              toastObject.goAway(0);
            }
          }
        ],
        position: 'top-right',
        icon: 'fa-gift',
        duration: 3000,
        keepOnHover: true
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
