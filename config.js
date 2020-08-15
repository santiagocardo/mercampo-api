'use strict'

require('dotenv').config()

const config = {
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  dbName: process.env.MONGO_DB
}

module.exports = config
