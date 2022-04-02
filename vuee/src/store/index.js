import { createStore } from "vuex";
import shop from "@/api/shop";
export default createStore({
  state: {
    products: [],
  },
  getters: {
    availableProducts(state, getters) {
      return state.products.filter((product) => product.inventory > 0);
    },
  },
  mutations: {
    setProducts(state, products) {
      // update products

      state.products = products;
    },
  },
  actions: {
    //acciones de la store

    fetchProducts({commit}) {
      //make the call
      //run setProduct mutation
      return new Promise((resolve, reject) => {
        shop.getProducts((products) => {
         commit("setProducts", products)

          resolve()
        });

      })

      
    },

    // addToCart (context, products) {
    //   if (product.inventory > 0) {
    //     context.commig ('pushProductToCart', product)
    //   } else {
    //     //show out of stock message
      
    //   }
    // }
  },
  modules: {},
});
