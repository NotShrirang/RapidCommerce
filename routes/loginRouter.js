const express = require('express')
const { loginPage } = require('../views/loginPage')

const loginRouter = express.Router();

loginRouter.get('/', loginPage)

module.exports = { loginRouter }