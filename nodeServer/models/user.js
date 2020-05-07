var Sequelize = require('sequelize')
var sequelize = require('../dbConn.js')

var user = sequelize.define(
    'USER',
    {
        id: {
            type: Sequelize.BIGINT(11),
            primaryKey: true,
            allowNull: true,
            unique: true,
        },
        username: Sequelize.STRING(100), // 标题
        PASSWORD: Sequelize.STRING(500), //
    },
    {
        tableName: 'USER',
        timestamps: false,
        freezeTableName: true,
    }
)

module.exports = user
