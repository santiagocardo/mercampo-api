'use strict'

const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const pino = require('pino-http')
const mongoose = require('mongoose')

const {
  notFoundHandler,
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers')
const { dbUser, dbPassword, dbName } = require('../config')
const api = require('./api')

const app = express()
const logger = require('pino')()

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0-0rr3j.mongodb.net/${dbName}?w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => logger.error(err))

app.use(pino())
app.use(express.json())
app.use(compression())
app.use(helmet())

app.use('/api/v1', api)

app.use(notFoundHandler)
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

module.exports = app
