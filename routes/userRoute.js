const express = require('express')
const { getAllUsers, createNewUsers } = require('../controllers/UserController')

const userRouter = express.Router();

userRouter.get('/', getAllUsers)
        .post('/', createNewUsers)

module.exports = { userRouter }