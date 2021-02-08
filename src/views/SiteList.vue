<template>
  <div class="site-list">
    <Search/>
    <div class="site-list__no-result" v-if="$store.state.sites.length == 0">Sorry, no result found with "<strong>{{ $store.state.query }}</strong>".</div>
    <Card v-for="(site, index) in $store.state.sites" :key="site.id" :index="index" :site="site"/>
    <button v-show="currentPage < $store.state.pageTotal" class="loadmore" id="loadmore">
      <div class="loadmore__content" v-on:click="loadMore()">Load more</div>
    </button>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Site List',
  data() {
    return {
      sites: null,
      currentPage: 1,
    }
  },
  components: {
    Card,
    Search
  },
  methods: {
    ...mapActions(['getSites', 'addMoreSites']),
    loadMore() {
      this.currentPage++;

      this.getSites({
      page: this.currentPage,
      limit: 10,
      pagination: true
    });
    }
  },
  computed: {
  },
  mounted() {
    this.getSites({
      page: 1,
      limit: 10
    });
  }
}
</script>
