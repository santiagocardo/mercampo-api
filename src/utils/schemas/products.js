'use strict'

const joi = require('@hapi/joi')

const productIdSchema = joi.object({ id: joi.string().regex(/^[0-9a-fA-F]{24}$/) })
const productNameSchema = joi.object({ name: joi.string().max(80) })

module.exports = {
  productIdSchema,
  productNameSchema
}
