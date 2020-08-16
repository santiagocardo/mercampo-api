'use strict'

const boom = require('@hapi/boom')

const { enviroment } = require('../../../config')

const notFoundHandler = (_req, res) => {
  const {
    output: { statusCode, payload }
  } = boom.notFound()

  res.status(statusCode).json(payload)
}

const withErrorStack = (error, stack) =>
  (enviroment !== 'production')
    ? { error, stack }
    : error

const logErrors = (err, req, _res, next) => {
  req.log.error(err)
  next(err)
}

const wrapErrors = (err, _req, _res, next) =>
  (!err.isBoom)
    ? next(boom.badImplementation(err))
    : next(err)

const errorHandler = (err, _req, res, _next) => {
  const { output: { statusCode, payload } } = err

  res.status(statusCode).json(withErrorStack(payload, err.stack))
}

module.exports = {
  notFoundHandler,
  logErrors,
  wrapErrors,
  errorHandler
}
