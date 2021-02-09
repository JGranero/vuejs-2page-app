<template>
    <div id="topnav">
      <MenuIcon id="topnav__list-icon"/>
      <h1 id="topnav__title">{{ $route.name }}</h1>
      <div id="topnav__language-toggle" @click="toggleLanguage()">
        {{ $store.state.lang.toUpperCase() }}
      </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import MenuIcon from '@/assets/images/MenuIcon.vue';

export default {
  name: 'Header',
  props: {
    msg: String
  }, 
  components: {
    MenuIcon
  },
  methods: {
    ...mapActions(['updateLanguage']),
    ...mapMutations(['UPDATE_LANGUAGE']),
    toggleLanguage() {
      if (this.$store.state.lang == "en") {
        this.UPDATE_LANGUAGE("fr");
      }
      else {
        this.UPDATE_LANGUAGE("en");
      }
      this.updateLanguage(this.$store.state.lang);
    }
  }
}
</script>