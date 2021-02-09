<template>
    <div id="topnav">
      <div id="topnav__list-icon" ref="list_icon" @click="toggleClass()"><span></span><span></span><span></span><span></span></div>
      <h1 id="topnav__title">{{ $route.name }}</h1>
      <div id="topnav__language-toggle" @click="toggleLanguage()">
        {{ $store.state.lang.toUpperCase() }}
      </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Header',
  props: {
    msg: String
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
    },
    toggleClass() {
        this.$refs.list_icon.classList.toggle('open');
    }
  }
}
</script>