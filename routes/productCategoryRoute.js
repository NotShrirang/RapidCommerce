const express = require('express')
const { getAllProductCategories, createNewProductCategories } = require('../controllers/ProductCategoryController')

const productCategoryRouter = express.Router();

productCategoryRouter.get('/', getAllProductCategories)
        .post('/', createNewProductCategories)

module.exports = { productCategoryRouter }