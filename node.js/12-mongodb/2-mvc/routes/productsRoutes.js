const express = require('express')
const routes = express.Router()

const ProductController = require('../controllers/ProductController')

routes.get('/', ProductController.showProducts)

module.exports = routes