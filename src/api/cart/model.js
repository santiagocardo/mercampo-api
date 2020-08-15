'use strict'

const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Cart', cartSchema)
