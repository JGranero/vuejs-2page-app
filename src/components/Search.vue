<template>
  <div class="search">
    <p>Search:</p>
    <input class="search__input" v-model="searchQuery" type="text" placeholder="Type your research"/>
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
  }
}
</script>