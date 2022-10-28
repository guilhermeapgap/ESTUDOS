const express = require('express')
const routes = express.Router()

const ProductController = require('../controllers/ProductController')

routes.get('/create', ProductController.createProduct)
routes.post('/create', ProductController.createProductPost)
routes.get('/:id', ProductController.getProduct)
routes.get('/', ProductController.showProducts)



module.exports = routes