<template>
  <div class="search">
    <p>{{ copy.search }}</p>
    <input class="search__input" v-model="searchQuery" type="text" :placeholder="copy.placeholder"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      searchQuery: "",
    }
  },
  methods: {
    ...mapActions(['getSites']),
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