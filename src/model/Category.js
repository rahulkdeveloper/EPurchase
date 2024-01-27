const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');


const Category = sequelize.define('Categories', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    parentId: {
        type: DataTypes.STRING
    }

})

Category.belongsTo(Category, { as: "parent", foreignKey: "parentId" })
Category.hasMany(Category, { as: "subcategories", foreignKey: "parentId" })



module.exports = Category;