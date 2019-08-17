// External Dependancies
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  status: String,
  quantity: Number,
  subtotal: Number,
  tax: Number,
  discount: Number,
  total: Number,
  products: [
    {
      _id: Number,
      sku: Number,
      mpn: Number,
      title: String,
      price: Number,
      category: String,
      inStock: Boolean
    }
  ]
})

module.exports = mongoose.model('Cart', cartSchema)
