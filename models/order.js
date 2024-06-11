'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, User, Bill }) {
      this.belongsTo(User, {
        foreignKey: "userId"
      })
      this.hasMany(Product, {
        foreignKey: "productId"
      })
      this.hasMany(Bill, {
        foreignKey: "orderId"
      })
    }
  }
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'orders',
    modelName: 'Order'
  });
  return Order;
};