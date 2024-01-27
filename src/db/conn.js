const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('EPurchase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;