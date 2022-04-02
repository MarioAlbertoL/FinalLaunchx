/**
 * Mocking client-server processing
 */
 const _products = [
    {"id": 1, "title": "Pastel sabor chocolate", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "Pastel sabor vainilla", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Pastel sabor fresa", "price": 19.99, "inventory": 5}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 2000)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
  }