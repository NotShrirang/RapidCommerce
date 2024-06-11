const { sequelize, Product, ProductCategory } = require('../models');

const getAllProducts = async (req, res) => {
    const products = await Product.findAll();
    var updatedProducts = []
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const discountedPrice = product.price - product.price*(product.discount / 100)
        updatedProducts.push({...product.dataValues, discountedPrice: discountedPrice})
    }
    console.log(updatedProducts)
    return res.json({status: "success", data: updatedProducts});
}

const createNewProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await Product.create(body);
        return res.json({status: "success", data: newProduct});
    } catch (err) {
        return res.json({
            status: "failure",
            error: err
        })
    }
}

const getProductByCategoryName = async (req, res) => {
    try {
        const body = req.body;
        const givenCategoryId = await ProductCategory.findAll({
            where: body
        })
        const filterset = await Product.findAll({
            where: {
                categoryId: givenCategoryId[0].id
            }
        });
        return res.json({status: "success", data: filterset});
    } catch (err) {
        return res.json({
            status: "failure",
            error: err
        })
    }
}

module.exports = { getAllProducts, createNewProduct, getProductByCategoryName }