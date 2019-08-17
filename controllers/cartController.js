// External Dependancies
const boom = require('boom')

// Get Data Models
const Cart = require('../models/Cart')

// Get all cars
exports.getCarts = async (req, reply) => {
  try {
    const cart = await Cart.find()
    return cart
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleCart = async (req, reply) => {
  try {
    const id = req.params.id
    const cart = await Cart.findById(id)
    return cart
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new cart
exports.addCarts = async (req, reply) => {
  try {
    const cart = new Cart(req.body)
    return cart.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing cart
exports.updateCart = async (req, reply) => {
  try {
    const id = req.params.id
    const cart = req.body
    const { ...updateData } = cart
    const update = await Cart.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a cart
exports.deleteCart = async (req, reply) => {
  try {
    const id = req.params.id
    const cart = await Cart.findByIdAndRemove(id)
    return cart
  } catch (err) {
    throw boom.boomify(err)
  }
}
