const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    mobile: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.TEXT,
        defaultValue: "user"
    }
})



module.exports = User