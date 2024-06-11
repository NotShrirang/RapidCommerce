const express = require('express')
const { getCustomersOrders, createNewOrder } = require('../controllers/OrderController')

const orderRouter = express.Router();

orderRouter
    .get('/', (req, res) => {
        return res.json({
            message: 'This method is not allowed. Please provide userId.'
        })
    })
    .post('/filter', getCustomersOrders)
    .post('/', createNewOrder)

module.exports = { orderRouter }