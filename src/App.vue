<template>
  <div :class="$store.state.lang">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    components: {
      Header
    },
    methods: {
      ...mapActions(['updateLanguage'])
    },
    created() {
      this.updateLanguage(this.$store.state.lang);
    }
  }

</script>
