const express = require('express')

const { sequelize } = require('./models')

const {loginRouter} = require('./routes/loginRouter')

const {userRouter} = require('./routes/userRoute')
const {productRouter} = require('./routes/ProductRoute')
const {orderRouter} = require('./routes/orderRoute')
const {productCategoryRouter} = require('./routes/productCategoryRoute')

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/login', loginRouter)
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/product-categories', productCategoryRouter);

app.listen({port: 5000} , async () => {
    console.log('Server started running on http://localhost:5000/');
    await sequelize.authenticate();
})