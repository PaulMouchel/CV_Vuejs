<template>
  <div id="app">
    <!---------------------------------- HERO ----------------------------------------->
    <Hero/>
    <!--------------------------------- NAVBAR ---------------------------------------->
    <Navbar/>
    <!---------------------------------- MAIN ----------------------------------------->
    <Main/>
    <!---------------------------------- MAIN ----------------------------------------->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar, Hero, Main, Footer
  },
  data: function () { return {
        mainNavLinks: document.querySelectorAll("nav ul li a"),
    }
  }
}

</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}
body {
    font-family: 'Montserrat', sans-serif;
}

html {
    scroll-behavior: smooth;
  }
</style>
