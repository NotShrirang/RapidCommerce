const { sequelize, ProductCategory } = require('../models')

const getAllProductCategories = async (req, res) => {
    const productCategories = await ProductCategory.findAll();
    return res.json({status: "success", data: productCategories});
}

const createNewProductCategories = async (req, res) => {
    try {
        const body = req.body;
        const newProductCategory = await ProductCategory.create(body);
        return res.json({status: "success", data: newProductCategory});
    } catch (error) {
        return res.json({
            status: "failure",
            error: error
        })
    }
}

module.exports = { getAllProductCategories, createNewProductCategories }