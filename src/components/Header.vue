<template>
    <div id="topnav">
      <MenuIcon id="topnav__list-icon"/>
      <h1 id="topnav__title">{{ $route.name }}</h1>
      <div id="topnav__left"></div>
    </div>
</template>

<script>
import MenuIcon from '@/assets/images/MenuIcon.vue';

export default {
  name: 'Header',
  props: {
    msg: String
  }, 
  components: {
    MenuIcon
  }
}
</script>