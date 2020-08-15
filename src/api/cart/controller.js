'use strict'

const Cart = require('./model')

const find = async (_req, res) => Cart
  .find()
  .populate('product')
  .exec()
  .then(products => res.json(products))

const add = async (req, res) => Cart
  .findOneAndUpdate(
    { 'product._id': req.body.productId },
    {
      $inc: { quantity: +req.body.quantity }
    },
    { upsert: true }
  )
  .exec()
  .then(() => res.status(201).json({ message: 'Product successfully added' }))

const remove = async (req, res) => Cart
  .findByIdAndDelete(req.params.id)
  .then(() => res.status(200).json({ message: 'Product successfully deleted' }))

module.exports = {
  find,
  add,
  remove
}
