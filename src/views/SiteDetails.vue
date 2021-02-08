<template>
  <div class="site-details">
    <div class="site-details__top-info">
      <ArrowIcon @click="goBack()"/>
      <div class="site-details__top-info-image">
        <img :src="site.images[0]"/>
      </div>
      <div>
        <h2>{{ site.title }}</h2>
        <p>{{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
        <p>{{ site.contacts.main.address.city }}, {{ site.contacts.main.address.country.toUpperCase() }}</p>
      </div>
    </div>
    <div class="site-details__image">
      <img :src="site.images[0]"/>
    </div>
    <div class="site-details__main-info">
      <div class="site-details__info-group">
        <PersonIcon/>
        <div>
          <p>{{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
          <p>{{ site.contacts.main.jobTitle }}</p>
        </div>
      </div>
      <div class="site-details__info-group">
        <PhoneIcon/>
        <p>{{ site.contacts.main.phoneNumber }}</p>
      </div>
      <div class="site-details__info-group">
        <EnvelopeIcon/>
        <p>{{ site.contacts.main.email.toLowerCase() }}</p>
      </div>
      <div class="site-details__info-group">
        <PinIcon/>
        <div>
          <p>{{ site.address.street }}</p>
          <p>{{ site.address.zipCode }} {{ site.address.city }}, {{ site.address.country.toUpperCase() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/images/ArrowIcon.vue';
import EnvelopeIcon from '@/assets/images/EnvelopeIcon.vue';
import PhoneIcon from '@/assets/images/PhoneIcon.vue';
import PinIcon from '@/assets/images/PinIcon.vue';
import PersonIcon from '@/assets/images/PersonIcon.vue';

export default {
  components: {
    EnvelopeIcon,
    ArrowIcon,
    PhoneIcon,
    PinIcon,
    PersonIcon
  },
  data() {
    return {
      site: Object
    }
  },
  methods: {
    parseProps() {
      this.site = JSON.parse(localStorage.getItem('site'));
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.site = JSON.parse(localStorage.getItem('site'));
  }
}
</script>