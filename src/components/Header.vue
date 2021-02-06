<template>
    <div id="topnav">
      <div id="topnav__list-icon"><img src="@/assets/images/list.svg"/></div>
      <div id="topnav__title">{{ $route.name }}</div>
      <div id="topnav__left"></div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>