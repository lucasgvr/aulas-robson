const Sequelize = require("sequelize")

const sequelizeComponent = new Sequelize('lucas', 'root', '', {
    dialect: 'mysql', host: 'localhost'
})

module.exports = sequelizeComponent