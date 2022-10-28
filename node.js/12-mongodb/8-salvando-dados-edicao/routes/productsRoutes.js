const express = require('express')
const routes = express.Router()

const ProductController = require('../controllers/ProductController')

routes.get('/create', ProductController.createProduct)
routes.post('/create', ProductController.createProductPost)
routes.post('/remove/:id', ProductController.removeProduct)
routes.post('/edit', ProductController.editProductPost)
routes.get('/edit/:id', ProductController.editProduct)
routes.get('/:id', ProductController.getProduct)
routes.get('/', ProductController.showProducts)



module.exports = routes