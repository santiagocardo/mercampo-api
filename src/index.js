'use strict'

const logger = require('pino')()

const app = require('./app')
const { port } = require('../config')

/** START SERVER */
app.listen(port, () => logger.info(`Listening on port: ${port}`))

/** PROCCESS ERRORS HANDLER */
const handleFatalError = err => {
  logger.error(err)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
