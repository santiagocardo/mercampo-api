'use strict'

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  lastPrice: Number,
  description: String,
  category: {
    enum: ['fruits', 'vegetables', 'organics']
  },
  quantityType: {
    enum: ['Unt', 'Gr', 'Kl']
  },
  defaultQuantity: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('Product', productSchema)
