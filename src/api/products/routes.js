'use strict'

const { Router } = require('express')

const controller = require('./controller')
const { catchErrors } = require('../../utils/helpers')
const schemaValidator = require('../../utils/middlewares/schemaValidator')
const { productIdSchema, productNameSchema } = require('../../utils/schemas/products')

const router = Router()

router.get('/', catchErrors(controller.find))
router.get('/search', schemaValidator(productNameSchema, 'query'), catchErrors(controller.search))
router.get('/:id', schemaValidator(productIdSchema, 'params'), catchErrors(controller.findOne))

module.exports = router
