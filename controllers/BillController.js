const { sequelize, Bill } = require('../models');

const getCustomersBills = async (req, res) => {
    const userId = req.params.id;
    const bills = await Bill.findAll({
        where: {
            userId: userId
        }
    });
    return res.json({status: "success", data: bills});
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