<template>
<router-link to="/site-details" v-on:click="stockDetails()">
  <div class="card">
    <div class="card__image">
      <img :src="site.images[0]"/>
      <div class="card__index">
        <span>{{ index + 1 }}</span>
      </div>
    </div>
    <div class="card__info">
      <h2> {{ site.title }}</h2>
      <p> {{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
      <p> {{ site.contacts.main.address.city }}, {{ site.contacts.main.address.country.toUpperCase() }}</p>
    </div>
    <div class="card__arrow">
      <ArrowIcon/>
    </div>
  </div>
</router-link>
</template>

<script>
import ArrowIcon from '@/assets/images/ArrowIcon';

export default {
  name: 'Card',
  props: {
    site: Object,
    index: Number
  },
  components: {
    ArrowIcon
  },
  methods: {
    stockDetails() {
      localStorage.setItem('site', JSON.stringify(this.site));
    }
  }
}
</script>