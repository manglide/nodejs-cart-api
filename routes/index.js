// Import our Controllers
const cartController = require('../controllers/cartController')
const Cart = require('../models/Cart')

const routes = [
  {
    method: 'GET',
    url: '/api/carts',
    handler: cartController.getCarts
  },
  {
    method: 'GET',
    url: '/api/carts/:id',
    handler: cartController.getSingleCart
  },
  {
    method: 'POST',
    url: '/api/carts',
    handler: cartController.addCarts,
    schema: Cart.cartSchema
  },
  {
    method: 'PUT',
    url: '/api/carts/:id',
    handler: cartController.updateCart
  },
  {
    method: 'DELETE',
    url: '/api/carts/:id',
    handler: cartController.deleteCart
  }
]

module.exports = routes
