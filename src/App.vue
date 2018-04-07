<template>
  <div id="app">
     <lead-wrap></lead-wrap>
    <router-view/>
  </div>
</template>

<script>
  import leadWrap from './components/lead.vue'

  export default {
    name: 'app',
    components: {
      leadWrap
    }
  }
</script>

<style>
  @import "./styles/global.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1280px;
  }
</style>
