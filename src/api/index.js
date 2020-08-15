'use strict'

const { Router } = require('express')

const router = Router()

router.use('/products', require('./products/routes'))
router.use('/cart', require('./cart/routes'))

module.exports = router
