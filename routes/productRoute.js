const express = require('express')
const { getAllProducts, createNewProduct, getProductByCategoryName } = require('../controllers/ProductController')

const productRouter = express.Router();

productRouter.get('/', getAllProducts)
        .post('/', createNewProduct)
        .post('/filter', getProductByCategoryName)

module.exports = { productRouter }