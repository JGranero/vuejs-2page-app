<template>
  <div class="home">
    <Card v-for="site in sites" :key="site.id" :site="site"/>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Site List',
  data() {
    return {
      sites: null,
      currentPage: 1
    }
  },
  components: {
    Card
  },
  methods: {
    getSites() {
      const axios = require('axios');

      axios.get('http://localhost:3000/sites?_limit=10&offset=12', {
        params: {
          _page: this.currentPage,
          _limit: 10,
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(response=>{this.sites=response.data;})
    }
  },
  computed: {
  },
  mounted() {
    this.getSites();
  }
}
</script>
