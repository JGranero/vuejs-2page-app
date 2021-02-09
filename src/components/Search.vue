<template>
  <div class="search">
    <p>{{ copy.search }}</p>
    <input class="search__input" v-model="searchQuery" type="text" :placeholder="copy.placeholder"/>
    <span class="search__cross" :class="searchQuery ? 'search__cross--grey' : 'search__cross--white'" @click="eraseSearch()">&#10005;</span>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      searchQuery: "",
    }
  },
  methods: {
    ...mapActions(['getSites']),
    ...mapMutations(['RESET_QUERY']),
    eraseSearch() {
      this.searchQuery = null;
      this.RESET_QUERY();
      this.getSites({
        page: 1,
        limit: 10
      });
    }
  },
  watch: {
    searchQuery: function(value) {
      if (value) {
        this.getSites({
          page: 1,
          limit: 10,
          query: value
        });
      }
    }
  },
  computed: {
    copy() {
      return this.$store.state.copydeck.search_component;
    }
  }
}
</script>