<template>
<Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

nav {
  padding: 10px 40px 10px;
}

nav a {
  font-weight: bold;
  color: #8b4d6a;
}

nav a.router-link-active {
  color: #ffffff;
}

</style>