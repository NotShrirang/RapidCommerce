const { sequelize, User } = require('../models')

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json({status: "success", data: users});
}

const createNewUsers = async (req, res) => {
    try {
        const body = req.body;
        if (!String(body.emailId).includes('@')){
            return res.json({status: "failure", error: `${body.emailId} is not a valid email id,`})
        }
        if (!String(body.emailId).includes('.')){
            return res.json({status: "failure", error: `${body.emailId} is not a valid email id,`})
        }
        const newUser = await User.create(body);
        return res.json({status: "success", data: newUser});
    } catch (error) {
        return res.json({
            status: "failure",
            error: error
        })
    }
}

module.exports = { getAllUsers, createNewUsers }