'use strict'

const joi = require('@hapi/joi')

const cartProductIdSchema = joi.object({ id: joi.string().regex(/^[0-9a-fA-F]{24}$/) })
const addProductSchema = joi.object({
  productId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  quantity: joi.number().max(20)
})

module.exports = {
  cartProductIdSchema,
  addProductSchema
}
