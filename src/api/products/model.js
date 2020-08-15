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
    type: String,
    required: true
  },
  productType: {
    enum: ['frutas', 'verduras', 'organicos']
  },
  quantityType: {
    enum: ['Und', 'Gr', 'Kl']
  }
})

module.exports = mongoose.model('Product', productSchema)
