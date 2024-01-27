const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');
const User = require('./User')

const Address = sequelize.define('Addresses', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    userId: {
        type: DataTypes.STRING,
    },
    address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    State: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    countryName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isHome: {
        type: DataTypes.BOOLEAN
    },
    isOffice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

Address.belongsTo(User, { foreignKey: "userId" })



module.exports = Address;