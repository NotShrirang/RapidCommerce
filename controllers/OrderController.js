const { sequelize, Order } = require('../models');

const getCustomersOrders = async (req, res) => {
    const userId = req.params.id;
    const orders = await Order.findAll({
        where: {
            userId: userId
        }
    });
    return res.json({status: "success", data: orders});
}

const createNewOrder = async (req, res) => {
    try {
        const body = req.body;
        const newOrder = await Order.create(body);
        return res.json({status: "success", data: newOrder});
    } catch (err) {
        return res.json({
            status: "failure",
            error: err
        })
    }
}

module.exports = { getCustomersOrders, createNewOrder }