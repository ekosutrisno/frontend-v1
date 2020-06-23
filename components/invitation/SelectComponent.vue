<template>
  <!-- <div>
    <select class="py-2 px-3 bg-transparent rounded border border-gray-400">
      <option
        class="py-2 px-3 bg-transparent rounded border border-gray-400"
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >{{option.nama}}</option>
    </select>
  </div>-->

  <div>
    <FormulateInput
      name="companyId"
      type="select"
      label="Company *"
      validation="required"
      placeholder="Choose Your Company"
      :options="{1:'Xsis Mitra Utama',2:'Xsis Academy'}"
    />
    <button @click="printdd" class="btn-util rounded">Home Page Dashboard</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { state } from '../../store/employee';
export default {
  name: 'SelectComponent',
  data() {
    return {
      optionss: {
        nama: ''
      }
    };
  },
  computed: {
    ...mapState({
      options: state => state.religions
    })
  },
  methods: {
    printdd() {
      const opt = this.$store.state.religions;
      console.log(opt);
      opt.map((v, i) => {
        const nn = v.nama;
        this.optionss.nama = nn;
        console.log(this.optionss);
      });
    }
  }
};
</script>

<style scoped>
</style>
