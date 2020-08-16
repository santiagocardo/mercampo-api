'use strict'

const { Router } = require('express')

const controller = require('./controller')
const { catchErrors } = require('../../utils/helpers')
const schemaValidator = require('../../utils/middlewares/schemaValidator')
const { cartProductIdSchema, addProductSchema } = require('../../utils/schemas/cart')

const router = Router()

router.get('/', catchErrors(controller.find))

router.post('/add', schemaValidator(addProductSchema), catchErrors(controller.add))

router.delete('/:id', schemaValidator(cartProductIdSchema, 'params'), catchErrors(controller.remove))

module.exports = router
