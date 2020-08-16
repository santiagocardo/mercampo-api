'use strict'

const Products = require('./model')

const find = async (req, res) => Products
  .find(req.query.category ? { category: req.query.category } : {}).exec()
  .then(products => res.json(products))

const findOne = async (req, res) => Products
  .findById(req.params.id).exec()
  .then(product => res.json(product))

const search = async (req, res) => Products
  .find({ name: { $regex: `.*${req.query.name}*`, $options: 'i' } }).exec()
  .then(products => res.json(products))

module.exports = {
  find,
  findOne,
  search
}
