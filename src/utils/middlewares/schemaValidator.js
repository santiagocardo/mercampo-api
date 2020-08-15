'use strict'

const boom = require('@hapi/boom')

const validate = (data, schema) => schema.validate(data).error

const validationHandler = (schema, check = 'body') =>
  (req, _res, next) => {
    const error = validate(req[check], schema)

    error ? next(boom.badRequest(error)) : next()
  }

module.exports = validationHandler
