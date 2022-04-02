<template>

    <div class=" d-flex align-items-center justify-content-center">
  <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
      height: 400px;
      width:100%;
      margin-top: 58px;
    "
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Bienvenido</h1>
          <h4 class="mb-3">De donde sabores se vive</h4>
          
        </div>
      </div>
      </div>
    </div>
    
  </div>

  <div class="menu">
    <br />
    <h1>Welcome to the client page</h1>
    <h1>Lista de sabores de pasteles</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif"> 
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false
    };
  },

  computed: {
    products() {
      return this.$store.getters.availableProducts;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => this.loading = false);
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  font-size: 25px;
  color: blueviolet;
}

.menu {
  text-align: center;
}
</style>
