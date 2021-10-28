<template>
  <div id="app">
    <Languages msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Languages from './components/Languages.vue'

export default {
  name: 'App',
  components: {
    Languages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
