<template>
  <div id="app">
    <app-navbar/>
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
</style>
