const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('EPurchase', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;