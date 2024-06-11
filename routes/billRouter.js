const express = require('express')
const { getCustomersBills, createNewBill } = require('../controllers/BillController')

const billRouter = express.Router();

billRouter
    .get('/', (req, res) => {
        return res.json({
            message: 'This method is not allowed. Please provide userId.'
        })
    })
    .post('/filter', getCustomersBills)
    .post('/', createNewBill)

module.exports = { billRouter }