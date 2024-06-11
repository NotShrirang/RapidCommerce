const { sequelize, Bill, Order } = require('../models');

const getCustomersBills = async (req, res) => {
    try {
        const body = req.body;
        const userId = body.userId;
        const orderId = body.orderId;
        const orders = await Order.findAll({
            where: {
                id: orderId,
                userId: userId
            }
        })
        const bills = await Bill.findAll({
            where: {
                orderId: orders[0].id
            }
        });
        return res.json({status: "success", data: bills});
    } catch (err) {
        return res.json({status: "failed", error: err})
    }
}

const createNewBill = async (req, res) => {
    try {
        const body = req.body;
        const newBill = await Bill.create(body);
        return res.json({status: "success", data: newBill});
    } catch (err) {
        return res.json({
            status: "failure",
            error: err
        })
    }
}

module.exports = { getCustomersBills, createNewBill }