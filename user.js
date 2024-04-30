const Sequelize = require('sequelize');

const database = require('./db');

const User = database.define('User',
    {
        Id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Email:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Senha:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }
)

module.exports = User;