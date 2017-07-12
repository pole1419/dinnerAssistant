<template>
  <div id="app">
    <header-com></header-com>
    <!-- <router-view></router-view> -->
    <history-com></history-com>
    <footer-com></footer-com>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import History from './pages/History.vue'
export default {
  name: 'app',
  components: {
    'header-com': Header,
    'footer-com': Footer,
    'history-com': History,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
