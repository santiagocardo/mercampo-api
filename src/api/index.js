'use strict'

const { Router } = require('express')

const router = Router()

/** ROUTES FOR EACH COMPONENT */
router.use('/products', require('./products/routes'))
router.use('/cart', require('./cart/routes'))

module.exports = router
