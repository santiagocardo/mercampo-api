'use strict'

/** REQUIRED DEPENDENCIES */
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const pino = require('pino-http')
const mongoose = require('mongoose')
const logger = require('pino')()

/** REQUIRED PROJECT FILES */
const {
  notFoundHandler,
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers')
const { dbUser, dbPassword, dbName } = require('../config')
const api = require('./api')

/** CREATE SERVER */
const app = express()

/** DATABASE CONNECTION */
mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0-0rr3j.mongodb.net/${dbName}?w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    logger.error(err)
    process.exit(1)
  })

/** MIDDLEWARES */
app.use(pino())
app.use(express.json())
app.use(compression())
app.use(helmet())

/** CORS config */
app.use((_req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  })
  next()
})

/** ROUTES */
app.use('/api/v1', api)

/** Not Found Handler - 404 */
app.use(notFoundHandler)

/** Error handler middlewares */
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

module.exports = app
