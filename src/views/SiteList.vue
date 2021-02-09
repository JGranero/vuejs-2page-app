<template>
  <div class="site-list">
    <Search/>
      <div class="container">
      <div class="site-list__results" v-show="$store.state.resultTotal > 0">{{ $store.state.resultTotal }} {{ copy.results }}</div>
      <div class="site-list__no-result" v-show="$store.state.resultTotal == 0">{{ copy.notFound }} "<strong>{{ $store.state.query }}</strong>".</div>
      <Card v-for="(site, index) in $store.state.sites" :key="site.id" :index="index" :site="site"/>
      <LoadMore v-show="currentPage < $store.state.pageTotal" v-on:click="loadMore()" class="loadmore--blue"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';
import LoadMore from '@/components/LoadMore.vue';
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
    Search,
    LoadMore
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
    copy() {
      return this.$store.state.copydeck.sitelist;
    }
  },
  mounted() {
    this.getSites({
      page: 1,
      limit: 10
    });
  }
}
</script>
