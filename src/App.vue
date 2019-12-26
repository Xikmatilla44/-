<template>
  <div id="app">
    <app-navbar/>
      <router-view />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    'app-navbar':HelloWorld
  }
}
</script>

<style>

  .navbarmi{
    position: sticky;
    top: 0px;
    z-index: 1;
  }
</style>
