<template>
  <div class="card">
    <div class="card__image">
      <img :src="site.images[0]"/>
    </div>
    <div class="card__info">
      <h2>{{ site.title }}</h2>
      <p> {{ site.contacts.main.address.city }}, {{ site.contacts.main.address.country.toUpperCase() }}</p>
      <p> {{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
    </div>
    <div class="card__arrow">
      <img src="@/assets/images/nextblue.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    site: Object,
  },
}
</script>