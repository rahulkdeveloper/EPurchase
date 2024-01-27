const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');
const Category = require('./Category')

const Product = sequelize.define('Products', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mrp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDigital: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    categoryId: {
        type: DataTypes.STRING,
    }
})

Product.belongsTo(Category, { foreignKey: "categoryId" })




module.exports = Product;